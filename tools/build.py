#!/usr/bin/env python3
"""
Génère les parties statiques du site et les PDF du CV à partir de tes données.

  python tools/build.py          met tout à jour (PDF régénérés seulement si le CV a changé)
  python tools/build.py --pdf    force aussi la régénération des 3 PDF
  python tools/build.py --check  ne modifie rien, échoue (code 1) si quelque chose est périmé
                                 (utilisé par la vérification automatique GitHub)

Ce que le script produit :
  - index.html : données structurées JSON-LD (Person + liste des projets) et version « sans JavaScript »
                 des projets et du contact (balises <noscript>)
  - cv.html    : version « sans JavaScript » du CV (balise <noscript>)
  - assets/cv/ : PDF du CV en anglais, français et grec + empreinte .source-hash

Il a besoin de Google Chrome (ou Chromium / Edge) et de Python 3, sans aucune bibliothèque supplémentaire.
Indique le chemin de Chrome avec la variable d'environnement CHROME si besoin.
"""
import argparse
import hashlib
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LANGS = ["en", "fr", "el"]
HASH_FILE = ROOT / "assets" / "cv" / ".source-hash"


# ---------------------------------------------------------------- Chrome

def find_chrome():
    env = os.environ.get("CHROME")
    if env and Path(env).exists():
        return env
    for name in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome", "msedge"):
        found = shutil.which(name)
        if found:
            return found
    for path in (
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    ):
        if Path(path).exists():
            return path
    sys.exit("Chrome introuvable : installe Google Chrome ou définis la variable CHROME.")


def chrome_flags():
    flags = ["--headless=new", "--disable-gpu", "--allow-file-access-from-files", "--no-sandbox"]
    return flags


def read_data():
    """Ouvre tools/export.html dans Chrome et récupère les données du site en JSON."""
    # la sortie de Chrome est en UTF-8 : on la décode explicitement (sinon Windows utilise cp1252 et abîme les accents)
    out = subprocess.run(
        [find_chrome(), *chrome_flags(), "--virtual-time-budget=4000", "--dump-dom", (ROOT / "tools" / "export.html").as_uri()],
        capture_output=True, timeout=120,
    ).stdout.decode("utf-8", errors="strict")
    m = re.search(r'<pre id="out">(.*?)</pre>', out, re.S)
    if not m:
        sys.exit("Impossible de lire les données du site (tools/export.html).")
    return json.loads(html.unescape(m.group(1)))


# ---------------------------------------------------------------- contenus générés

def esc(s):
    return html.escape(str(s), quote=True)


def split_top_level(text):
    """Découpe « A, B (x, y), C » aux virgules qui ne sont pas entre parenthèses."""
    parts, depth, cur = [], 0, ""
    for ch in text:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur.strip())
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur.strip())
    return parts


def ld_json(d):
    site = d["siteUrl"].rstrip("/") + "/"
    same_as = [s["url"] for s in d["socials"] if s.get("url")]
    skills = []
    for s in d["cv"]["skills"]:
        for item in split_top_level(s["items"]):
            name = re.sub(r"\s*\(.*\)", "", item).strip()
            if name and name not in skills:
                skills.append(name)
    graph = [
        {
            "@type": "Person",
            "@id": site + "#me",
            "name": "Thibaud Derville",
            "url": site,
            "image": site + d["cv"]["photo"],
            "jobTitle": d["cv"]["role"],
            "description": d["cv"]["profile"],
            "sameAs": same_as,
            "knowsLanguage": ["fr", "en"],
            "knowsAbout": skills,
            "alumniOf": [{"@type": "EducationalOrganization", "name": e["place"].split(",")[0]} for e in d["cv"]["education"]],
            "address": {"@type": "PostalAddress", "addressCountry": "CY"},
        },
        {
            "@type": "ItemList",
            "name": "Projects",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": i,
                    "item": {
                        "@type": "CreativeWork",
                        "name": p["title"],
                        "description": p["description"],
                        "url": p["url"],
                        "author": {"@id": site + "#me"},
                    },
                }
                for i, p in enumerate((p for p in d["projects"] if p["url"]), 1)
            ],
        },
    ]
    body = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=2).replace("</", "<\\/")
    return '<script type="application/ld+json">\n' + body + "\n</script>"


def noscript_projects(d, group):
    items = []
    for p in d["projects"]:
        if p["group"] != group or not p["url"]:
            continue
        li = [f'    <li>', f'      <h3><a href="{esc(p["url"])}" rel="noopener noreferrer">{esc(p["title"])}</a></h3>',
              f'      <p>{esc(p["description"])}</p>']
        if p["result"]:
            li.append(f'      <p>{esc(p["result"])}</p>')
        li.append("    </li>")
        items.append("\n".join(li))
    return "<noscript>\n  <ul class=\"nojs-list\">\n" + "\n".join(items) + "\n  </ul>\n</noscript>"


def noscript_contact(d):
    links = [f'  <li><a href="mailto:{esc(d["email"])}">{esc(d["email"])}</a></li>']
    for s in d["socials"]:
        if s.get("url"):
            links.append(f'  <li><a href="{esc(s["url"])}" rel="noopener noreferrer">{esc(s["label"])}</a></li>')
    return '<noscript>\n<ul class="contact__list nojs-list">\n' + "\n".join(links) + "\n</ul>\n</noscript>"


def noscript_cv(d):
    cv = d["cv"]
    out = ["<noscript>", f'  <h2>Thibaud Derville</h2>', f'  <p>{esc(cv["role"])}</p>',
           "  <h3>Profile</h3>", f'  <p>{esc(cv["profile"])}</p>', "  <h3>Employment history</h3>", '  <ul class="nojs-list">']
    for j in cv["experience"]:
        out.append("    <li>")
        out.append(f'      <h3>{esc(j["role"])}, {esc(j["org"])}, {esc(j["place"])}</h3>')
        out.append(f'      <p>{esc(j["period"])}</p>')
        out.append("      <ul>")
        out += [f"        <li>{esc(b)}</li>" for b in j["bullets"]]
        out.append("      </ul>")
        out.append("    </li>")
    out += ["  </ul>", "  <h3>Education</h3>", "  <ul>"]
    out += [f'    <li>{esc(e["degree"])}, {esc(e["field"])} ({esc(e["year"])}), {esc(e["place"])}</li>' for e in cv["education"]]
    out += ["  </ul>", "  <h3>Technical skills</h3>", "  <ul>"]
    out += [f'    <li>{esc(s["label"])} : {esc(s["items"])}</li>' for s in cv["skills"]]
    out += ["  </ul>", "  <h3>Languages</h3>", "  <ul>"]
    out += [f'    <li>{esc(l["name"])} : {esc(l["level"])}</li>' for l in cv["languages"]]
    out.append("  </ul>")
    files = d["cvFiles"] if isinstance(d["cvFiles"], dict) else {}
    names = {"en": "English", "fr": "Français", "el": "Ελληνικά"}
    links = [f'<a href="{esc(files[l])}">PDF ({names[l]})</a>' for l in LANGS if files.get(l)]
    if links:
        out.append("  <p>Download: " + " · ".join(links) + "</p>")
    out.append("</noscript>")
    return "\n".join(out)


# ---------------------------------------------------------------- remplacement entre repères

def block_re(name):
    return re.compile(
        r"(?m)^([ \t]*)<!-- BUILD:" + re.escape(name) + r":START -->\n.*?^[ \t]*<!-- BUILD:" + re.escape(name) + r":END -->",
        re.S,
    )


def render_block(name, content, indent):
    lines = content.split("\n")
    body = "\n".join((indent + ln) if ln.strip() else ln for ln in lines)
    return f"{indent}<!-- BUILD:{name}:START -->\n{body}\n{indent}<!-- BUILD:{name}:END -->"


def apply_block(text, name, content):
    m = block_re(name).search(text)
    if not m:
        sys.exit(f"Repère « BUILD:{name} » introuvable dans la page : voir tools/build.py.")
    return text[: m.start()] + render_block(name, content, m.group(1)) + text[m.end():]


def build_pages(d):
    """Retourne {chemin: nouveau contenu} pour les pages dont les parties générées ont changé."""
    plan = {
        "index.html": [
            ("LD-JSON", ld_json(d)),
            ("NOSCRIPT-FEATURED", noscript_projects(d, "featured")),
            ("NOSCRIPT-COLLECTIONS", noscript_projects(d, "collection")),
            ("NOSCRIPT-CONTACT", noscript_contact(d)),
        ],
        "cv.html": [("NOSCRIPT-CV", noscript_cv(d))],
    }
    changed = {}
    for rel, blocks in plan.items():
        path = ROOT / rel
        old = path.read_text(encoding="utf-8")
        new = old
        for name, content in blocks:
            new = apply_block(new, name, content)
        if new != old:
            changed[rel] = new
    return changed


# ---------------------------------------------------------------- PDF du CV

def source_hash():
    """Empreinte de tout ce qui influence le PDF : contenu du CV, photo et règles d'impression."""
    h = hashlib.sha256()
    h.update((ROOT / "js" / "cv-data.js").read_bytes())
    h.update((ROOT / "assets" / "photo-thibaud.jpg").read_bytes())
    css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    i = css.find("@media print")
    if i >= 0:
        depth, j = 0, css.index("{", i)
        k = j
        while k < len(css):
            if css[k] == "{":
                depth += 1
            elif css[k] == "}":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        h.update(css[i : k + 1].encode("utf-8"))
    h.update((ROOT / "js" / "projects.js").read_text(encoding="utf-8").split("const SITE_URL")[1].split(";")[0].encode("utf-8"))
    return h.hexdigest()


def pdf_is_current():
    if not HASH_FILE.exists():
        return False
    if not all((ROOT / "assets" / "cv" / f"CV_Thibaud_Derville_{l.upper()}.pdf").exists() for l in LANGS):
        return False
    return HASH_FILE.read_text().split()[0] == source_hash()


def verify_pdf(path):
    data = path.read_bytes()
    pages = len(re.findall(rb"/Type\s*/Page[^s]", data))
    blob = data
    for m in re.finditer(rb"stream\r?\n", data):
        end = data.find(b"endstream", m.end())
        try:
            blob += zlib.decompress(data[m.end():end])
        except Exception:
            pass
    if pages != 1:
        sys.exit(f"{path.name} : {pages} pages au lieu d'une seule. Le CV est trop long pour tenir sur une page A4.")
    if b"Inter" not in blob:
        sys.exit(f"{path.name} : la police Inter n'est pas incorporée (polices non chargées ?).")


def build_pdfs():
    chrome = find_chrome()
    for lang in LANGS:
        out = ROOT / "assets" / "cv" / f"CV_Thibaud_Derville_{lang.upper()}.pdf"
        url = (ROOT / "cv.html").as_uri() + f"?lang={lang}&pdf=1"
        subprocess.run(
            [chrome, *chrome_flags(), "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
             "--virtual-time-budget=8000", f"--print-to-pdf={out}", url],
            capture_output=True, timeout=180,
        )
        if not out.exists():
            sys.exit(f"PDF non généré : {out.name}")
        verify_pdf(out)
        print(f"  PDF {lang.upper()} : {out.stat().st_size // 1024} Ko, 1 page")
    HASH_FILE.write_text(source_hash() + "\n# Empreinte du CV au moment de la génération des PDF (tools/build.py)\n", encoding="utf-8")


# ---------------------------------------------------------------- programme

def main():
    ap = argparse.ArgumentParser(description="Génère les parties statiques du site et les PDF du CV.")
    ap.add_argument("--check", action="store_true", help="ne rien modifier ; échoue si quelque chose est périmé")
    ap.add_argument("--pdf", action="store_true", help="forcer la régénération des PDF")
    args = ap.parse_args()

    data = read_data()
    changed = build_pages(data)
    stale_pdf = args.pdf or not pdf_is_current()

    if args.check:
        problems = []
        if changed:
            problems.append("parties générées périmées dans : " + ", ".join(sorted(changed)))
        if not pdf_is_current():
            problems.append("les PDF du CV ne correspondent plus au CV (js/cv-data.js, photo ou règles d'impression)")
        if problems:
            print("Vérification échouée :")
            for p in problems:
                print("  -", p)
            print("\nCorrection : lance « python tools/build.py » puis enregistre les fichiers modifiés.")
            sys.exit(1)
        print("Tout est à jour : parties générées et PDF du CV.")
        return

    for rel, new in changed.items():
        (ROOT / rel).write_text(new, encoding="utf-8", newline="\n")
        print(f"  {rel} : mis à jour")
    if not changed:
        print("  pages : déjà à jour")
    if stale_pdf:
        print("  PDF du CV : régénération…")
        build_pdfs()
    else:
        print("  PDF du CV : déjà à jour")


if __name__ == "__main__":
    main()
