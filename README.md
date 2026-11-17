# Portfolio — Thibaud Derville

Portfolio personnel (développeur web & data analyst), en HTML / CSS / JavaScript pur, sans outil de build.
Site trilingue : anglais (par défaut), français et grec.

## Contenu

- `index.html` : page d'accueil (À propos, Projets, CV, Contact)
- `cv.html` : CV écrit en HTML, avec impression / enregistrement en PDF
- `legal.html` : mentions légales (éditeur, hébergement, données, propriété intellectuelle), en EN / FR / EL
- `css/style.css` : styles (responsive, menu mobile, mise en page d'impression du CV)
- `js/projects.js` : liste des projets, e-mail, réseaux, réglage du PDF du CV
- `js/cv-data.js` : contenu du CV (EN / FR / EL)
- `js/i18n.js` : traductions des textes du site
- `js/main.js` : rendu des projets, du contact, du CV et du menu
- `assets/` : photo, icône et image d'aperçu de partage

## Modifier le contenu

- **Ajouter un projet** : copier un bloc dans `PROJECTS` (`js/projects.js`).
- **Modifier le CV** : `js/cv-data.js`.
- **Modifier un texte du site** : `js/i18n.js` (clé dans la bonne langue).
- **PDF du CV prêt à télécharger** : déposer le fichier dans `assets/` et renseigner `CV.file` dans `js/projects.js`.
  Sans PDF, le bouton « Télécharger » ouvre l'impression du navigateur (« Enregistrer au format PDF »).

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
