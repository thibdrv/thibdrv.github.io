# Portfolio — Thibaud Derville

Portfolio personnel (développeur web & data analyst), en HTML / CSS / JavaScript pur, sans outil de build.
Site trilingue : anglais (par défaut), français et grec.

## Contenu

- `index.html` : page d'accueil (À propos, Projets, CV, Contact)
- `cv.html` : CV écrit en HTML, avec téléchargement du PDF dans la langue choisie
- `404.html` : page « introuvable » (servie automatiquement par GitHub Pages)
- `robots.txt`, `sitemap.xml` : référencement
- `legal.html` : mentions légales (éditeur, hébergement, données, propriété intellectuelle), en EN / FR / EL
- `css/style.css` : styles (les blocs responsive sont regroupés en fin de fichier, du plus large au plus étroit)
- `css/fonts.css` : polices hébergées (Inter, Cormorant Garamond), sans requête vers Google
- `js/projects.js` : liste des projets, e-mail, réseaux, réglage du PDF du CV
- `js/cv-data.js` : contenu du CV (EN / FR / EL)
- `js/i18n.js` : traductions des textes du site
- `js/main.js` : rendu des projets, du contact, du CV et du menu
- `assets/` : photo, icône, image d'aperçu de partage, illustrations des projets, polices (`fonts/`) et PDF du CV (`cv/`)

## Modifier le contenu

- **Ajouter un projet** : copier un bloc dans `PROJECTS` (`js/projects.js`).
- **Modifier le CV** : `js/cv-data.js`.
- **Modifier un texte du site** : `js/i18n.js` (clé dans la bonne langue).
- **Champs d'une carte projet** : `result` (ce que le projet apporte) et `note` (remarque pratique, ex. identifiants de démo) sont optionnels.
- **PDF du CV** : un par langue dans `assets/cv/`, déclarés dans `CV.file` (`js/projects.js`).
  Si `CV.file` est vide, le bouton « Télécharger » ouvre l'impression du navigateur (« Enregistrer au format PDF »).

### Régénérer les PDF du CV (après une modification du CV)

Avec le site lancé en local (voir ci-dessous) et Google Chrome installé :

```bash
for L in en fr el; do
  chrome --headless=new --no-pdf-header-footer --virtual-time-budget=8000     --print-to-pdf="assets/cv/CV_Thibaud_Derville_$(echo $L | tr a-z A-Z).pdf"     "http://localhost:5500/cv.html?lang=$L&pdf=1"
done
```

`?lang=` choisit la langue et `?pdf=1` remplace « Téléchargé le » par « Mis à jour le » dans le pied de page.
Le CV est mis en page pour tenir sur une page A4 dans les trois langues : vérifier après chaque modification.

## Tester en local

```bash
python -m http.server 5500
```

Puis ouvrir <http://localhost:5500>.

## Mise en ligne (GitHub Pages)

1. Pousser le dépôt sur GitHub.
2. `Settings` → `Pages` → source : branche `main`, dossier `/ (root)`.
3. Les balises d'aperçu de partage (`og:url`, `og:image`, `canonical`) dans le `<head>` de `index.html` pointent déjà vers `https://thibdrv.github.io/`.
   Si l'adresse du site change, mettre ces trois lignes à jour.
4. Ne pas publier le dossier `.claude/` (déjà exclu par `.gitignore`).
5. `404.html` utilise des chemins absolus (`/css/...`) : il suppose que le site est à la racine du domaine (`thibdrv.github.io`).
6. Si l'adresse du site change : mettre à jour `SITE_URL` (`js/projects.js`), `robots.txt`, `sitemap.xml` et les balises du `<head>`.

## Fins de ligne

`.gitattributes` et `.editorconfig` imposent des fins de ligne LF pour tous les fichiers texte.
