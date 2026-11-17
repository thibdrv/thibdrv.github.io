/* ==========================================================================
   CONTENU DU CV (page cv.html)
   --------------------------------------------------------------------------
   Mélange des deux CV (Web Developer + Data Analyst).
   Chaque texte est { en, fr, el }. Pour modifier le CV, change-le ici.
   Les titres de rubriques (Profil, Formation, ...) sont dans js/i18n.js (cv.sec.*).
   ========================================================================== */

const CV_DATA = {
  role: {
    en: "Web Developer & Data Analyst",
    fr: "Développeur web & Data Analyst",
    el: "Προγραμματιστής Web & Αναλυτής Δεδομένων"
  },

  profile: {
    en: "Web developer and data analyst with hands-on experience in PHP, JavaScript, HTML5/CSS3, SQL, Python and Power BI. Designs clean, layered architectures and well-structured relational databases, and turns raw datasets into actionable insights through reports and dashboards. Six years of military leadership bring discipline, reliability and teamwork.",
    fr: "Développeur web et data analyst avec une expérience concrète en PHP, JavaScript, HTML5/CSS3, SQL, Python et Power BI. Conçoit des architectures en couches propres et des bases de données relationnelles bien structurées, et transforme des données brutes en enseignements exploitables grâce à des rapports et tableaux de bord. Six années de commandement dans l’armée m’ont apporté discipline, fiabilité et esprit d’équipe.",
    el: "Προγραμματιστής web και αναλυτής δεδομένων με πρακτική εμπειρία σε PHP, JavaScript, HTML5/CSS3, SQL, Python και Power BI. Σχεδιάζω καθαρές αρχιτεκτονικές επιπέδων και καλά δομημένες σχεσιακές βάσεις δεδομένων, και μετατρέπω ακατέργαστα δεδομένα σε αξιοποιήσιμα συμπεράσματα μέσω αναφορών και πινάκων ελέγχου. Έξι χρόνια ηγεσίας στον στρατό μου έδωσαν πειθαρχία, αξιοπιστία και ομαδικό πνεύμα."
  },

  /* Photo affichée en haut du CV (laisse "" pour ne pas en afficher) */
  photo: "assets/photo-thibaud.jpg",

  /* Coordonnées */
  phone: PHONE, /* défini dans js/projects.js */
  location: { en: "Cyprus", fr: "Chypre", el: "Κύπρος" },
  status: { en: "EU citizen", fr: "Citoyen de l’UE", el: "Πολίτης της ΕΕ" },
  linkedin: { text: "ThibaudDerville", url: "https://www.linkedin.com/in/thibaud-derville-106241273/" },
  github: { text: "github.com/thibdrv", url: "https://github.com/thibdrv" },
  portfolio: { text: "thibdrv.github.io", url: "https://thibdrv.github.io/" },

  education: [
    {
      degree: { en: "Bachelor Degree", fr: "Bachelor Degree", el: "Bachelor Degree" },
      field: { en: "Data Analyst", fr: "Data Analyst", el: "Αναλυτής Δεδομένων" },
      year: "2026",
      place: { en: "Simplon, Paris, France", fr: "Simplon, Paris, France", el: "Simplon, Παρίσι, Γαλλία" }
    },
    {
      degree: { en: "Associate Degree", fr: "Associate Degree", el: "Associate Degree" },
      field: { en: "Web Developer", fr: "Développeur web", el: "Προγραμματιστής Web" },
      year: "2025",
      place: { en: "HTSA, Toulouse, France", fr: "HTSA, Toulouse, France", el: "HTSA, Τουλούζη, Γαλλία" }
    }
  ],

  skills: [
    {
      label: { en: "Data & BI", fr: "Data & BI", el: "Data & BI" },
      items: {
        en: "Power BI, DAX, Excel, data cleaning, data visualisation",
        fr: "Power BI, DAX, Excel, nettoyage de données, visualisation de données",
        el: "Power BI, DAX, Excel, καθαρισμός δεδομένων, οπτικοποίηση δεδομένων"
      }
    },
    {
      label: { en: "Programming", fr: "Programmation", el: "Προγραμματισμός" },
      items: "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), SQL, web scraping"
    },
    {
      label: { en: "Web development", fr: "Développement web", el: "Ανάπτυξη web" },
      items: "PHP, JavaScript, HTML5, CSS3"
    },
    {
      label: { en: "Back-end & architecture", fr: "Back-end et architecture", el: "Back-end & αρχιτεκτονική" },
      items: {
        en: "Multi-tier (layered) architecture, full-stack development, technical documentation",
        fr: "Architecture multicouche, développement full stack, documentation technique",
        el: "Αρχιτεκτονική πολλαπλών επιπέδων, full-stack ανάπτυξη, τεχνική τεκμηρίωση"
      }
    },
    {
      label: { en: "Databases", fr: "Bases de données", el: "Βάσεις δεδομένων" },
      items: {
        en: "MySQL, MariaDB, relational schema design",
        fr: "MySQL, MariaDB, conception de schémas relationnels",
        el: "MySQL, MariaDB, σχεδιασμός σχεσιακών σχημάτων"
      }
    },
    {
      label: { en: "Security & compliance", fr: "Sécurité et conformité", el: "Ασφάλεια & συμμόρφωση" },
      items: {
        en: "Web security, GDPR (data protection)",
        fr: "Sécurité web, RGPD (protection des données)",
        el: "Ασφάλεια web, GDPR (προστασία δεδομένων)"
      }
    },
    {
      label: { en: "AI tools", fr: "Outils d’IA", el: "Εργαλεία AI" },
      items: {
        en: "Claude Code, Ollama (local LLMs)",
        fr: "Claude Code, Ollama (LLM locaux)",
        el: "Claude Code, Ollama (τοπικά LLM)"
      }
    },
    {
      label: { en: "Tools", fr: "Outils", el: "Εργαλεία" },
      items: "Git, GitHub, VS Code, Jupyter Notebook, Anaconda, Google Colab, Microsoft 365"
    }
  ],

  languages: [
    {
      name: { en: "French", fr: "Français", el: "Γαλλικά" },
      level: { en: "Native", fr: "Langue maternelle", el: "Μητρική" }
    },
    {
      name: { en: "English", fr: "Anglais", el: "Αγγλικά" },
      level: { en: "C1", fr: "C1", el: "C1" }
    }
  ],

  experience: [
    {
      role: { en: "Data Analyst Intern", fr: "Stagiaire Data Analyst", el: "Ασκούμενος Αναλυτής Δεδομένων" },
      org: "Synapse Learners",
      place: { en: "Sharjah, UAE", fr: "Sharjah, Émirats arabes unis", el: "Σαρτζά, ΗΑΕ" },
      period: {
        en: "July 2026 – September 2026",
        fr: "Juillet 2026 – Septembre 2026",
        el: "Ιούλιος 2026 – Σεπτέμβριος 2026"
      },
      bullets: {
        en: [
          "Gathered KPI requirements directly with clients and turned them into Power BI reports and dashboards (DAX measures) that gave clear visibility into business performance.",
          "Cleaned, transformed and analysed raw datasets with Python (Pandas) and SQL to produce insights for cross-functional decisions.",
          "Presented results to clients and refined reports based on their feedback."
        ],
        fr: [
          "Recueil des besoins en KPI directement auprès des clients et transformation en rapports et tableaux de bord Power BI (mesures DAX) offrant une vision claire de la performance de l’activité.",
          "Nettoyage, transformation et analyse de jeux de données brutes avec Python (Pandas) et SQL pour produire des enseignements au service de décisions transverses.",
          "Présentation des résultats aux clients et amélioration des rapports selon leurs retours."
        ],
        el: [
          "Συλλογή απαιτήσεων KPI απευθείας από τους πελάτες και μετατροπή τους σε αναφορές και πίνακες ελέγχου Power BI (μέτρα DAX) που έδιναν καθαρή εικόνα της επιχειρηματικής απόδοσης.",
          "Καθαρισμός, μετασχηματισμός και ανάλυση ακατέργαστων συνόλων δεδομένων με Python (Pandas) και SQL για συμπεράσματα που στήριζαν αποφάσεις μεταξύ τμημάτων.",
          "Παρουσίαση των αποτελεσμάτων στους πελάτες και βελτίωση των αναφορών με βάση τα σχόλιά τους."
        ]
      }
    },
    {
      role: { en: "Web Developer Intern", fr: "Stagiaire développeur web", el: "Ασκούμενος Προγραμματιστής Web" },
      org: "HG Développement",
      place: { en: "Rouen, France", fr: "Rouen, France", el: "Ρουέν, Γαλλία" },
      period: {
        en: "June 2025 – November 2025",
        fr: "Juin 2025 – Novembre 2025",
        el: "Ιούνιος 2025 – Νοέμβριος 2025"
      },
      bullets: {
        en: [
          "Developed a full-stack web application with PHP, JavaScript, HTML5 and CSS3.",
          "Designed a multi-tier (layered) architecture to separate core responsibilities and keep the codebase maintainable.",
          "Designed and structured relational MySQL databases from scratch, creating optimised schemas that guarantee data integrity.",
          "Produced comprehensive technical documentation upon project completion to facilitate maintenance and smooth handover."
        ],
        fr: [
          "Développement d’une application web full stack avec PHP, JavaScript, HTML5 et CSS3.",
          "Conception d’une architecture multicouche (en couches) séparant les responsabilités clés et garantissant un code maintenable.",
          "Conception et structuration de bases de données MySQL relationnelles de zéro, avec des schémas optimisés garantissant l’intégrité des données.",
          "Rédaction d’une documentation technique complète en fin de projet pour faciliter la maintenance et la passation."
        ],
        el: [
          "Ανάπτυξη full-stack web εφαρμογής με PHP, JavaScript, HTML5 και CSS3.",
          "Σχεδιασμός αρχιτεκτονικής πολλαπλών επιπέδων που διαχωρίζει τις βασικές αρμοδιότητες και διατηρεί τον κώδικα συντηρήσιμο.",
          "Σχεδιασμός και δόμηση σχεσιακών βάσεων δεδομένων MySQL από το μηδέν, με βελτιστοποιημένα σχήματα που εγγυώνται την ακεραιότητα των δεδομένων.",
          "Σύνταξη πλήρους τεχνικής τεκμηρίωσης στο τέλος του έργου για εύκολη συντήρηση και ομαλή παράδοση."
        ]
      }
    },
    {
      role: { en: "Team Leader", fr: "Chef d’équipe", el: "Αρχηγός ομάδας" },
      org: {
        en: "3rd Marine Infantry Parachute Regiment (French Army)",
        fr: "3e Régiment de Parachutistes d’Infanterie de Marine (Armée de Terre)",
        el: "3ο Σύνταγμα Πεζοναυτών Αλεξιπτωτιστών (Γαλλικός Στρατός Ξηράς)"
      },
      place: { en: "Carcassonne, France", fr: "Carcassonne, France", el: "Καρκασόν, Γαλλία" },
      period: {
        en: "June 2018 – June 2024",
        fr: "Juin 2018 – Juin 2024",
        el: "Ιούνιος 2018 – Ιούνιος 2024"
      },
      bullets: {
        en: [
          "Led a team of 3 soldiers on operational deployments in Africa and French overseas territories.",
          "Organised the team’s missions, equipment and safety in fast-changing environments.",
          "Reported clearly and accurately to command\u00a0; quickly mastered new procedures, protocols and technical equipment."
        ],
        fr: [
          "Commandement d’une équipe de 3 soldats lors de déploiements opérationnels en Afrique et en Outre-mer.",
          "Organisation des missions, du matériel et de la sécurité de l’équipe dans des environnements en évolution rapide.",
          "Compte rendu clair et précis au commandement ; maîtrise rapide de nouvelles procédures, protocoles et équipements techniques."
        ],
        el: [
          "Ηγεσία ομάδας 3 στρατιωτών σε επιχειρησιακές αποστολές στην Αφρική και στα υπερπόντια εδάφη της Γαλλίας.",
          "Οργάνωση των αποστολών, του εξοπλισμού και της ασφάλειας της ομάδας σε περιβάλλοντα που αλλάζουν γρήγορα.",
          "Σαφής και ακριβής αναφορά στη διοίκηση· γρήγορη εξοικείωση με νέες διαδικασίες, πρωτόκολλα και τεχνικό εξοπλισμό."
        ]
      }
    }
  ]
};
