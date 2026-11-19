/* ==========================================================================
   Rendu des projets (données dans js/projects.js)
   ========================================================================== */
(function () {
  "use strict";

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // N'autorise que les liens http(s) pour éviter tout "javascript:" par erreur
  const safeUrl = (u) => (/^https?:\/\//i.test(u || "") ? u : "");

  // Nom court d'un projet pour les statistiques : "WildFlix, Movie Recommendation" -> "wildflix-movie-recommendation"
  const trackSlug = (p) =>
    String((p.title && typeof p.title === "object" ? p.title.en : p.title) || "project")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40);

  const { t, loc } = window.i18n;

  function renderProjects(instant) {
    if (typeof PROJECTS === "undefined") return;
    // group : "featured" (gros projets uniques) ou "collection" (regroupe plusieurs projets)
    const groups = { featured: "projects-featured", collection: "projects-collections" };
    Object.entries(groups).forEach(([group, id]) => {
      const root = document.getElementById(id);
      if (!root) return;
      const list = PROJECTS.filter((p) => (p.group || "featured") === group);
      root.innerHTML = list.map((p) => cardHtml(p, instant)).join("");
      const block = root.closest(".projects-group");
      if (block) block.hidden = list.length === 0;
    });
  }

  function cardHtml(p, instant) {
      const url = safeUrl(p.url);
      const repo = safeUrl(p.repo);
      const live = Boolean(url);
      const slug = trackSlug(p);
      const tag = live ? "a" : "article";
      const attrs = live ? ` href="${esc(url)}" target="_blank" rel="noopener noreferrer" data-track="project-${slug}"` : "";
      const title = loc(p.title);
      const initial = esc(p.mono || String(title || "?").trim().charAt(0).toUpperCase());
      const demo = safeUrl(p.demo);

      const media = p.image
        ? `<img src="${esc(p.image)}" alt="${esc(title)}" width="${Number(p.imageWidth) || 800}" height="${Number(p.imageHeight) || 600}" loading="lazy" decoding="async">`
        : `<span class="card__mono" aria-hidden="true">${initial}</span>`;

      const tags = (p.tags || []).map((tg) => `<li>${esc(loc(tg))}</li>`).join("");

      const links = live
        ? `<div class="card__links"><span>${esc(t("projects.view"))} ↗</span></div>`
        : "";

      // Le dépôt est un lien séparé : on évite d'imbriquer des <a> dans une carte-lien
      const extra = [
        demo && `<a href="${esc(demo)}" target="_blank" rel="noopener noreferrer" data-track="project-${slug}-demo">${esc(t("projects.demo"))} ↗</a>`,
        repo && `<a href="${esc(repo)}" target="_blank" rel="noopener noreferrer" data-track="project-${slug}-code">${esc(t("projects.code"))} ↗</a>`
      ].filter(Boolean);
      const repoLink = extra.length ? `<div class="card__links">${extra.join("")}</div>` : "";

      return `
        <div class="reveal${instant ? " is-visible" : ""}">
          <${tag} class="card${live ? "" : " card--soon"}"${attrs}>
            <div class="card__media">
              ${media}
            </div>
            <span class="card__badge">${esc(loc(p.category))}${live ? "" : " · " + esc(t("projects.soon"))}</span>
            <div class="card__meta">
              <h3 class="card__title">${esc(title)}</h3>
              ${p.year ? `<span class="card__year">${esc(p.year)}</span>` : ""}
            </div>
            <p class="card__desc">${esc(loc(p.description))}</p>
            ${p.result ? `<p class="card__result">${esc(loc(p.result))}</p>` : ""}
            ${p.note ? `<p class="card__note">${esc(loc(p.note))}</p>` : ""}
            ${tags ? `<ul class="card__tags">${tags}</ul>` : ""}
            ${links}
          </${tag}>
          ${repoLink}
        </div>`;
  }

  function renderContact() {
    const root = document.getElementById("contact-list");
    if (!root) return;

    const rows = [];
    if (typeof EMAIL !== "undefined" && EMAIL) {
      rows.push({ label: "Email", icon: "mail", text: EMAIL, href: `mailto:${EMAIL}`, external: false });
    }
    if (typeof PHONE !== "undefined" && PHONE) {
      rows.push({
        label: t("cv.label.phone"),
        labelKey: "cv.label.phone",
        icon: "phone",
        text: PHONE,
        href: `tel:${PHONE.replace(/\s+/g, "")}`,
        external: false
      });
    }
    if (typeof SOCIALS !== "undefined") {
      SOCIALS.filter((s) => safeUrl(s.url)).forEach((s) =>
        rows.push({ label: s.label, icon: s.label.toLowerCase(), text: s.handle || s.label, href: s.url, external: true })
      );
    }

    root.innerHTML = rows
      .map(
        (r) => `
        <li class="reveal">
          <a class="contact__row" href="${esc(r.href)}"${r.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <span class="contact__label">${icon(r.icon)}<span${r.labelKey ? ` data-i18n="${esc(r.labelKey)}"` : ""}>${esc(r.label)}</span></span>
            <span class="contact__value">${esc(r.text)}</span>
            <span class="contact__arrow" aria-hidden="true">${r.external ? "↗" : "→"}</span>
          </a>
        </li>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     Apparition au scroll
     ------------------------------------------------------------------------ */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el, i) => {
      // petit décalage pour les éléments d'une même grille
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     Icônes (SVG intégrés) : LinkedIn, GitHub, e-mail
     ------------------------------------------------------------------------ */
  const ICONS = {
    linkedin:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    github:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    mail:
      '<svg class="icon icon--stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>',
    phone:
      '<svg class="icon icon--stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 4h3.5l1.8 4.6-2.2 1.4a11 11 0 005.9 5.9l1.4-2.2L20 15.5V19a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/></svg>'
  };
  const icon = (name) => ICONS[name] || "";

  /* Raccourcis LinkedIn / GitHub dans l'en-tête (données : SOCIALS dans projects.js) */
  function renderHeaderSocial() {
    const root = document.getElementById("header-social");
    if (!root || typeof SOCIALS === "undefined") return;
    root.innerHTML = SOCIALS.filter((s) => safeUrl(s.url) && ICONS[s.label.toLowerCase()])
      .map(
        (s) =>
          `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}" title="${esc(s.label)}">${icon(s.label.toLowerCase())}</a>`
      )
      .join("");
  }

  /* Page CV : le CV est écrit en HTML à partir de CV_DATA (js/cv-data.js).
     Téléchargement : PDF fourni (CV.file dans projects.js) sinon « Enregistrer en PDF » du navigateur */
  function renderCvDocument() {
    const root = document.getElementById("cv-doc");
    if (!root || typeof CV_DATA === "undefined") return;
    const d = CV_DATA;

    const link = (o) =>
      `<a href="${esc(safeUrl(o.url))}" target="_blank" rel="noopener noreferrer">${esc(o.text)}</a>`;
    const phone = String(d.phone || "");

    const contact = [
      ["LinkedIn", link(d.linkedin)],
      ["GitHub", link(d.github)],
      d.portfolio && ["Portfolio", link(d.portfolio)],
      [t("cv.label.email"), `<a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a>`],
      phone && [t("cv.label.phone"), `<a href="tel:${esc(phone.replace(/\s+/g, ""))}">${esc(phone)}</a>`],
      [t("cv.label.location"), `${esc(loc(d.location))}<span class="cv-sep"> · </span>${esc(loc(d.status))}`]
    ]
      .filter(Boolean)
      .map(([k, v]) => `<li><span class="cv-k">${esc(k)}</span>${v}</li>`)
      .join("");

    const education = d.education
      .map(
        (e) => `
        <li>
          <strong>${esc(loc(e.degree))}</strong>
          <span>${esc(loc(e.field))} · ${esc(e.year)}</span>
          <span class="cv-muted">${esc(loc(e.place))}</span>
        </li>`
      )
      .join("");

    const skills = d.skills
      .map((s) => `<li><strong>${esc(loc(s.label))}</strong><span>${esc(loc(s.items))}</span></li>`)
      .join("");

    const languages = d.languages
      .map((l) => `<li><strong>${esc(loc(l.name))}</strong><span>${esc(loc(l.level))}</span></li>`)
      .join("");

    const jobs = d.experience
      .map((j) => {
        const bullets = (loc(j.bullets) || []).map((b) => `<li>${esc(b)}</li>`).join("");
        return `
        <article class="cv-job">
          <h4 class="cv-job__role">${esc(loc(j.role))}</h4>
          <p class="cv-job__org">${esc(loc(j.org))}, ${esc(loc(j.place))}</p>
          <p class="cv-job__period">${esc(loc(j.period))}</p>
          <ul class="cv-job__bullets">${bullets}</ul>
        </article>`;
      })
      .join("");

    // Visible uniquement à l'impression : lien du CV (adresse officielle du site) + date.
    // Avec ?pdf=1 (génération du PDF fixe) la date devient « Mis à jour le ».
    const base = typeof SITE_URL !== "undefined" && SITE_URL ? String(SITE_URL).replace(/\/?$/, "/") : "";
    const pageUrl = base ? base + "cv.html" : location.href.split(/[?#]/)[0];
    const linkPart = /^https?:\/\//i.test(pageUrl)
      ? `<span class="cv-print-foot__link"><a href="${esc(pageUrl)}">${esc(pageUrl)}</a></span>`
      : "<span></span>";
    const isPdf = new URLSearchParams(location.search).has("pdf");
    const dateLabel = t(isPdf ? "cv.print.updated" : "cv.print.downloaded");
    const printLink = `<p class="cv-print-foot">${linkPart}<span class="cv-print-foot__date">${esc(dateLabel)} <time id="cv-print-date"></time></span></p>`;

    root.innerHTML = `
      <header class="cv-doc__head">
        <div class="cv-doc__id">
          <h2 class="cv-doc__name"><span>Thibaud</span> <span>Derville</span></h2>
          <p class="cv-doc__role">${esc(loc(d.role))}</p>
        </div>
        ${d.photo ? `<img class="cv-doc__photo" src="${esc(d.photo)}" alt="Thibaud Derville" width="88" height="88">` : ""}
      </header>
      <div class="cv-doc__grid">
        <aside class="cv-doc__side">
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.contact"))}</h3><ul class="cv-contact">${contact}</ul></section>
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.education"))}</h3><ul class="cv-list">${education}</ul></section>
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.skills"))}</h3><ul class="cv-list cv-list--skills">${skills}</ul></section>
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.languages"))}</h3><ul class="cv-list cv-list--inline">${languages}</ul></section>
        </aside>
        <div class="cv-doc__main">
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.profile"))}</h3><p class="cv-profile">${esc(loc(d.profile))}</p></section>
          <section class="cv-sec"><h3 class="cv-sec__title">${esc(t("cv.sec.experience"))}</h3>${jobs}</section>
        </div>
      </div>
      ${printLink}`;
  }

  /* PDF à télécharger : CV.file peut être un chemin unique ou { en, fr, el } (un PDF par langue) */
  function cvFileFor(lang) {
    if (typeof CV === "undefined" || !CV.file) return "";
    const f = typeof CV.file === "string" ? CV.file : CV.file[lang] || CV.file.en || "";
    const file = String(f).trim();
    return file && !/^\s*(javascript|data|vbscript):/i.test(file) ? file : "";
  }

  let cvDownloadBound = false;
  function updateCvDownload() {
    const dl = document.getElementById("cv-download");
    if (!dl) return;
    const hint = document.getElementById("cv-hint");
    const file = cvFileFor(window.i18n.lang);

    if (file) {
      // PDF fourni : vrai téléchargement, dans la langue choisie
      dl.setAttribute("href", file);
      dl.setAttribute("download", file.split("/").pop());
      dl.dataset.mode = "file";
      if (hint) hint.hidden = true;
    } else {
      // Pas de PDF : on ouvre l'impression (mise en page A4 prévue), « Enregistrer au format PDF »
      dl.setAttribute("href", "#");
      dl.removeAttribute("download");
      dl.dataset.mode = "print";
      if (hint) hint.hidden = false;
    }

    if (!cvDownloadBound) {
      cvDownloadBound = true;
      dl.addEventListener("click", (e) => {
        if (dl.dataset.mode !== "print") return;
        e.preventDefault();
        updatePrintDate();
        window.print();
      });
    }
  }

  /* Date et heure du téléchargement, écrites dans le pied de page du PDF au moment de l'impression */
  function updatePrintDate() {
    const el = document.getElementById("cv-print-date");
    if (!el) return;
    const locales = { en: "en-GB", fr: "fr-FR", el: "el-GR" };
    const now = new Date();
    try {
      el.textContent = now.toLocaleString(locales[window.i18n.lang] || "en-GB", { dateStyle: "long", timeStyle: "short" });
    } catch (e) {
      el.textContent = now.toLocaleString();
    }
    el.setAttribute("datetime", now.toISOString());
  }

  function renderCv() {
    renderCvDocument();
    updatePrintDate();
    updateCvDownload();
  }
  window.addEventListener("beforeprint", updatePrintDate);

  /* Statistiques de visite (GoatCounter, sans cookie) : on compte aussi les actions utiles.
     Les noms ci-dessous sont ceux des événements dans le tableau de bord GoatCounter.
     Sans le script GoatCounter (bloqueur, hors ligne), rien ne se passe. */
  function track(name) {
    try {
      const g = window.goatcounter;
      if (g && typeof g.count === "function") g.count({ path: name, title: name, event: true });
    } catch (e) {}
  }

  function trackName(a) {
    const named = a.closest("[data-track]");
    if (named) return named.dataset.track;
    if (a.id === "cv-download") {
      return (a.dataset.mode === "file" ? "cv-download-" : "cv-print-") + window.i18n.lang;
    }
    const href = a.getAttribute("href") || "";
    if (/^https?:\/\/(www\.)?github\.com\/thibdrv/i.test(href)) return "click-github";
    if (/linkedin\.com\//i.test(href)) return "click-linkedin";
    if (/^mailto:/i.test(href)) return "click-email";
    if (/^tel:/i.test(href)) return "click-phone";
    return "";
  }

  function initTracking() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const name = trackName(a);
      if (name) track(name);
    });
  }

  /* Menu burger (mobile) : s'ouvre au clic, se ferme en choisissant un lien,
     avec Échap, en cliquant à côté, ou si on repasse en grand écran */
  function initMenu() {
    const header = document.getElementById("header");
    const btn = header && header.querySelector(".menu-toggle");
    if (!btn) return;

    const setOpen = (open) => {
      header.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    };

    btn.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    header.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (!header.contains(e.target)) setOpen(false);
    });
    window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* Barre de navigation « vivante » (page d'accueil) :
     - elle est noire sur une partie crème et crème sur une partie noire (couleurs inversées)
     - le lien de la section affichée est surligné (À propos, Projets, CV, Contact) */
  function initNavSpy() {
    const header = document.getElementById("header");
    const nav = document.querySelector(".nav");
    if (!header || !nav || !document.getElementById("accueil")) return;

    // section de la page -> lien du menu
    const MAP = { parcours: "#parcours", qualites: "#parcours", interets: "#parcours", projets: "#projets", collections: "#projets", cv: "cv.html", contact: "#contact" };
    const links = Array.from(nav.querySelectorAll("a"));
    let ticking = false;

    function update() {
      ticking = false;
      const h = header.offsetHeight;

      const midY = h / 2;
      const dark = Array.from(document.querySelectorAll(".section--dark, .hero__card, .hero__stack, .footer")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= midY && r.bottom > midY;
      });
      header.classList.toggle("is-on-dark", dark);

      const probe = h + 24;
      let current = null;
      document.querySelectorAll("main > section[id]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) current = s.id;
      });
      const foot = document.querySelector(".footer");
      if (foot && foot.getBoundingClientRect().top <= probe) current = "contact";

      const href = current ? MAP[current] : null;
      links.forEach((a) => {
        const on = href !== null && a.getAttribute("href") === href;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  const y = new Date().getFullYear();
  ["year", "year2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  renderProjects();
  document.addEventListener("langchange", () => renderProjects(true));
  initMenu();
  initTracking();
  /* Qualités : un seul panneau ouvert à la fois (survol, focus clavier ou clic) */
  (function initStrengths() {
    const list = document.getElementById("strengths");
    if (!list) return;
    const items = Array.from(list.children);
    // le grand numéro du panneau noir reprend celui de la ligne
    items.forEach((el) => {
      const n = el.querySelector(".strength__num");
      const d = el.querySelector(".strength__desc");
      if (n && d) d.dataset.num = n.textContent.trim();
    });
    const open = (el) => items.forEach((i) => i.classList.toggle("is-active", i === el));
    items.forEach((el) => {
      ["mouseenter", "focus", "click"].forEach((ev) => el.addEventListener(ev, () => open(el)));
    });
    open(items[0]);
  })();

  renderContact();
  // le libellé « Téléphone » est créé après le chargement : on le met à jour au changement de langue
  document.addEventListener("langchange", () => {
    document.querySelectorAll("#contact-list [data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  });
  renderHeaderSocial();
  initNavSpy();
  renderCv();
  document.addEventListener("langchange", renderCv);
  initReveal();
})();
