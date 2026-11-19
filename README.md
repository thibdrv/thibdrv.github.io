# Portfolio — Thibaud Derville

Portfolio personnel (développeur web & data analyst), en HTML / CSS / JavaScript pur, sans outil de build.
Site trilingue : anglais (par défaut), français et grec.

## Contenu

- `index.html` : page d'accueil (À propos, Projets, CV, Contact)
- `cv.html` : CV écrit en HTML, avec téléchargement du PDF dans la langue choisie
- `404.html` : page « introuvable » (servie automatiquement par GitHub Pages)
- `robots.txt`, `sitemap.xml` : référencement
- `tools/build.py` : génère les parties statiques et les PDF du CV (voir ci-dessous) ; `tools/export.html` en est la page technique
- `.github/workflows/check.yml` : vérification automatique à chaque envoi sur GitHub
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

### Après une modification du CV ou des projets : `python tools/build.py`

Le site construit les projets et le CV avec JavaScript. Pour que les moteurs de recherche, les aperçus de lien
et les visiteurs sans JavaScript voient aussi le contenu, `tools/build.py` écrit dans les pages :

- les **données structurées** (JSON-LD : une `Person` et la liste des projets) dans `index.html` ;
- une **version simple** (`<noscript>`) des projets, du contact et du CV, dans `index.html` et `cv.html` ;
- les **3 PDF du CV** (`assets/cv/`), régénérés seulement si le CV, la photo ou les règles d'impression ont changé.

```bash
python tools/build.py          # tout mettre à jour
python tools/build.py --pdf    # forcer aussi les PDF
python tools/build.py --check  # ne rien modifier, échoue si quelque chose est périmé
```

Il faut Python 3 et Google Chrome (ou Chromium / Edge) ; `CHROME=/chemin/vers/chrome` si Chrome n'est pas trouvé.
Le script refuse un PDF de plus d'une page : le CV est mis en page pour tenir sur une page A4 dans les trois langues.
Les blocs générés sont entourés de repères `<!-- BUILD:... -->` : ne pas les modifier à la main.

**Vérification automatique** : à chaque envoi sur `main`, GitHub lance `python tools/build.py --check`
(onglet *Actions* du dépôt). S'il échoue, c'est que le CV ou les projets ont changé sans régénération :
lancer `python tools/build.py` puis enregistrer les fichiers modifiés.

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

## Statistiques de visite (GoatCounter)

Les visites sont comptées avec [GoatCounter](https://www.goatcounter.com/), sans cookie et sans rien stocker dans le navigateur du visiteur.
Tableau de bord : <https://thibauddrv.goatcounter.com> (compte personnel, connexion nécessaire).

- Le script est ajouté en bas de `index.html`, `cv.html`, `legal.html` et `404.html`. Les visites depuis `localhost` sont ignorées automatiquement.
- Des **événements** sont comptés en plus des pages vues (filtre « Events » dans le tableau de bord) :
  `cv-download-en|fr|el`, `cv-print-…` (impression du CV si aucun PDF), `click-github`, `click-linkedin`, `click-email`, `click-phone`,
  et `project-<nom>` / `project-<nom>-demo` / `project-<nom>-code` pour chaque projet (le nom vient du titre anglais).
  Le code est dans `js/main.js` (fonctions `track` et `initTracking`).
- **Exclure tes propres visites** : ouvrir ton site avec `#toggle-goatcounter` à la fin de l'adresse, dans chaque navigateur utilisé.
- Les mentions légales (`legal.html`, clés `legal.data.*` et `legal.third.*` de `js/i18n.js`) décrivent cette mesure d'audience :
  les modifier si l'outil change.

## Fins de ligne

`.gitattributes` et `.editorconfig` imposent des fins de ligne LF pour tous les fichiers texte.
