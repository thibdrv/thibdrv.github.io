/* ==========================================================================
   CONFIGURATION DU PORTFOLIO
   --------------------------------------------------------------------------
   Pour ajouter un projet : copie un bloc { ... } dans PROJECTS et remplis-le.
   Les projets sont affichés dans l'ordre de la liste.

   - title       : nom du projet
   - year        : année (optionnel : laisse "" pour ne rien afficher)
   - category    : "Web", "Data", ...
   - description : 1 à 2 phrases. Soit un texte simple (même texte dans toutes
                   les langues), soit { en: "...", fr: "...", el: "..." }
   - tags        : technologies utilisées
   - url         : lien du projet en ligne (laisse "" tant qu'il n'est pas déployé)
   - demo        : lien d'une démo en direct (optionnel)
   - repo        : lien GitHub (optionnel)
   - image       : chemin vers une capture, ex. "assets/mon-projet.jpg" (optionnel)
   - imageWidth / imageHeight : dimensions de l'image (optionnel, 800 x 600 par défaut ; évite les sauts de page)
   - mono        : lettres affichées quand il n'y a pas d'image (optionnel)
   - group       : "featured" = gros projet unique (affiché en premier)
                   "collection" = regroupe plusieurs projets (affiché ensuite)
   - result      : ce que le projet apporte, en une phrase (optionnel, affiché sous la description)
   - note        : petite remarque pratique, ex. identifiants de démo (optionnel)
   title, category, description, result et note acceptent le format { en, fr, el }.

   Pour supprimer un emplacement « à venir » : efface simplement son bloc.
   ========================================================================== */

const PROJECTS = [
  {
    title: "Web Projects",
    group: "collection",
    year: "",
    category: "Web",
    description: {
      en: "A collection of five web projects with live demos : a full-stack recipe platform (PHP, MariaDB), a Python job-retrieval tool for Cyprus, a Greek-learning app, an air-quality monitor and an astronomy quiz.",
      fr: "Une collection de cinq projets web avec démos en ligne : une plateforme de recettes full stack (PHP, MariaDB), un outil Python de recherche d’offres d’emploi à Chypre, une application d’apprentissage du grec, un suivi de la qualité de l’air et un quiz d’astronomie.",
      el: "Μια συλλογή πέντε web έργων με ζωντανές επιδείξεις : πλατφόρμα συνταγών full stack (PHP, MariaDB), εργαλείο Python για αναζήτηση θέσεων εργασίας στην Κύπρο, εφαρμογή εκμάθησης ελληνικών, παρακολούθηση ποιότητας αέρα και κουίζ αστρονομίας."
    },
    tags: ["PHP", "MariaDB", "Python", "JavaScript", "Web scraping"],
    url: "https://thibdrv.github.io/Web_Projects/",
    demo: "",
    repo: "",
    image: "assets/projects/web-projects.svg",
    mono: "{ }"
  },
  {
    title: {
      en: "WildFlix, Movie Recommendation",
      fr: "WildFlix, Recommandation de films",
      el: "WildFlix, Σύσταση ταινιών"
    },
    year: "",
    category: "Data",
    description: {
      en: "An end-to-end movie recommendation engine with interactive filtering and business analytics : TMDB API data, cleaning with pandas, TF-IDF and cosine similarity, deployed as a multilingual Streamlit app.",
      fr: "Un moteur de recommandation de films de bout en bout, avec filtres interactifs et analyses métier : données de l’API TMDB, nettoyage avec pandas, TF-IDF et similarité cosinus, déployé en application Streamlit multilingue.",
      el: "Ένα ολοκληρωμένο σύστημα σύστασης ταινιών με διαδραστικά φίλτρα και επιχειρηματικές αναλύσεις : δεδομένα από το API του TMDB, καθαρισμός με pandas, TF-IDF και συνημίτονο ομοιότητας, δημοσιευμένο ως πολύγλωσση εφαρμογή Streamlit."
    },
    tags: ["Python", "pandas", "Machine learning", "Streamlit", "TMDB API"],
    result: {
      en: "Tailor-made recommendations based on your preferences.",
      fr: "Des recommandations sur mesure, selon vos préférences.",
      el: "Προτάσεις προσαρμοσμένες στις προτιμήσεις σας."
    },
    note: {
      en: "Demo login: demo / demo",
      fr: "Connexion démo : demo / demo",
      el: "Σύνδεση demo: demo / demo"
    },
    url: "https://thibdrv.github.io/Recommendation_System/",
    demo: "https://wildflix-data-app.streamlit.app/",
    repo: "",
    image: "assets/projects/wildflix.svg",
    group: "featured",
    mono: "WF"
  },
  {
    title: "Data Projects",
    group: "collection",
    year: "",
    category: "Data",
    description: {
      en: "A collection of data projects built mainly around web scraping and real-time analysis : analysis automated with Claude and verified in Power BI, alongside several Power BI dashboards.",
      fr: "Une collection de projets data centrés sur le web scraping et l’analyse en temps réel : analyse automatisée avec Claude et vérifiée dans Power BI, accompagnée de plusieurs tableaux de bord Power BI.",
      el: "Μια συλλογή έργων δεδομένων με επίκεντρο το web scraping και την ανάλυση σε πραγματικό χρόνο : αυτοματοποιημένη ανάλυση με το Claude, επαληθευμένη στο Power BI, μαζί με αρκετούς πίνακες ελέγχου Power BI."
    },
    tags: [
      "Web scraping",
      { en: "Real-time analysis", fr: "Analyse en temps réel", el: "Ανάλυση σε πραγματικό χρόνο" },
      "Claude",
      "Power BI",
      { en: "Dashboards", fr: "Tableaux de bord", el: "Πίνακες ελέγχου" }
    ],
    url: "https://thibdrv.github.io/Data_Projects/",
    demo: "",
    repo: "",
    image: "assets/projects/data-projects.svg",
    mono: "DP"
  },

  {
    title: {
      en: "Toys and Models, Executive Dashboard",
      fr: "Toys and Models, Tableau de bord de direction",
      el: "Toys and Models, Πίνακας ελέγχου διοίκησης"
    },
    year: "",
    category: "Data",
    description: {
      en: "A daily-refreshed Power BI executive dashboard for a scale-model retailer : EDA on a relational database, 19 KPIs across HR, sales, finance and supply chain, built with SQL, Python and DAX.",
      fr: "Un tableau de bord de direction Power BI actualisé chaque jour pour un détaillant de modèles réduits : EDA sur une base relationnelle, 19 KPI couvrant RH, ventes, finance et chaîne logistique, réalisé avec SQL, Python et DAX.",
      el: "Ένας πίνακας ελέγχου διοίκησης στο Power BI, με καθημερινή ανανέωση, για εταιρεία λιανικής μινιατούρων : διερευνητική ανάλυση σε σχεσιακή βάση δεδομένων, 19 KPI για ανθρώπινο δυναμικό, πωλήσεις, οικονομικά και εφοδιαστική αλυσίδα, με SQL, Python και DAX."
    },
    tags: ["Power BI", "DAX", "SQL", "Python", "pandas"],
    result: {
      en: "Spots late deliveries and unpaid invoices, improves customer retention and supports daily decisions.",
      fr: "Repère les livraisons en retard et les impayés, améliore la fidélisation des clients et soutient les décisions au quotidien.",
      el: "Εντοπίζει καθυστερημένες παραδόσεις και απλήρωτα τιμολόγια, βελτιώνει τη διατήρηση πελατών και στηρίζει τις καθημερινές αποφάσεις."
    },
    url: "https://drive.google.com/drive/folders/1xPfRDjTGJdZ2du3sL-_a7A6fpXC9lngQ?usp=sharing",
    demo: "",
    repo: "",
    image: "assets/projects/toys-and-models.svg",
    group: "featured",
    mono: "TM"
  },
  {
    title: "Smart Real Estate",
    year: "",
    category: "Data",
    description: {
      en: "An automated real estate intelligence pipeline that scrapes multiple sources to aggregate market pricing and generate real-time analytics on the Cyprus property market. Data refreshes automatically every two days.",
      fr: "Un pipeline d’intelligence immobilière automatisé, qui collecte plusieurs sources pour agréger les prix du marché et produire des analyses en temps réel sur l’immobilier à Chypre. Les données se mettent à jour automatiquement tous les deux jours.",
      el: "Ένα αυτοματοποιημένο σύστημα πληροφόρησης για την αγορά ακινήτων, που συλλέγει δεδομένα από πολλές πηγές, συγκεντρώνει τις τιμές της αγοράς και παράγει αναλύσεις σε πραγματικό χρόνο για τα ακίνητα στην Κύπρο. Τα δεδομένα ενημερώνονται αυτόματα κάθε δύο ημέρες."
    },
    tags: [
      "Web scraping",
      { en: "Automation", fr: "Automatisation", el: "Αυτοματοποίηση" },
      { en: "Real-time analytics", fr: "Analyse en temps réel", el: "Ανάλυση σε πραγματικό χρόνο" },
      { en: "Real estate", fr: "Immobilier", el: "Ακίνητα" }
    ],
    result: {
      en: "Each listing links straight to the original ad, so you can jump on the best deals.",
      fr: "Chaque annonce renvoie directement vers l’annonce d’origine, pour saisir les bonnes affaires.",
      el: "Κάθε αγγελία οδηγεί απευθείας στην αρχική αγγελία, ώστε να εκμεταλλεύεστε τις καλές ευκαιρίες."
    },
    url: "https://smart-real-estate-seven.vercel.app/en",
    demo: "",
    repo: "",
    image: "assets/projects/smart-real-estate.svg",
    group: "featured",
    mono: "SR"
  },
  {
    title: {
      en: "Iatros, Medical Appointments",
      fr: "Iatros, Rendez-vous médicaux",
      el: "Iatros, Ιατρικά ραντεβού"
    },
    year: "",
    category: "Web",
    description: {
      en: "An online platform that makes booking medical appointments easier in Cyprus, inspired by existing sites while trying to improve a few of their weak points. Still a demo, not a live service yet.",
      fr: "Une plateforme en ligne qui facilite la prise de rendez-vous médicaux à Chypre, inspirée d’autres sites tout en cherchant à en améliorer certains points. Pour l’instant, il s’agit d’une démo, pas encore d’un service réel.",
      el: "Μια διαδικτυακή πλατφόρμα που διευκολύνει το κλείσιμο ιατρικών ραντεβού στην Κύπρο, εμπνευσμένη από άλλους ιστότοπους, με στόχο να βελτιώσει ορισμένα σημεία τους. Προς το παρόν είναι demo, όχι ακόμη πραγματική υπηρεσία."
    },
    tags: [
      { en: "Healthcare", fr: "Santé", el: "Υγεία" },
      { en: "Appointment booking", fr: "Prise de rendez-vous", el: "Κλείσιμο ραντεβού" },
      { en: "Cyprus", fr: "Chypre", el: "Κύπρος" },
      "Demo"
    ],
    url: "https://iatros-demo.vercel.app/en",
    demo: "",
    repo: "",
    image: "assets/projects/iatros.svg",
    group: "featured",
    mono: "IA"
  }
];

/* Section Contact : e-mail + réseaux (affichés comme des lignes élégantes) */
const EMAIL = "thibaud.derville@outlook.fr";

/* Téléphone : affiché dans le CV et dans le pied de page (mets "" pour le masquer partout) */
const PHONE = "+357 94 11 01 66";

/* Adresse officielle du site : sert au lien imprimé en pied de page du PDF du CV */
const SITE_URL = "https://thibdrv.github.io/";

/* Page CV (cv.html) : PDF à télécharger.
   - file : un chemin unique ("assets/cv/CV.pdf") ou un PDF par langue { en, fr, el }.
   - Tant que "file" est vide, le bouton « Télécharger » ouvre l'impression : « Enregistrer au format PDF ».
   Le CV lui-même est écrit en HTML (js/cv-data.js) ; les PDF sont générés depuis cv.html. */
const CV = {
  file: {
    en: "assets/cv/CV_Thibaud_Derville_EN.pdf",
    fr: "assets/cv/CV_Thibaud_Derville_FR.pdf",
    el: "assets/cv/CV_Thibaud_Derville_EL.pdf"
  }
};

const SOCIALS = [
  { label: "LinkedIn", handle: "thibaud-derville", url: "https://www.linkedin.com/in/thibaud-derville-106241273/" },
  { label: "GitHub",   handle: "thibdrv",          url: "https://github.com/thibdrv" }
];
