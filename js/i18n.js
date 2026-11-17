/* ==========================================================================
   Traductions : anglais (par défaut), français, grec
   --------------------------------------------------------------------------
   Pour modifier un texte : change-le ici dans la bonne langue.
   Dans le HTML, chaque texte traduit porte data-i18n="clé"
   (ou data-i18n-html="clé" s'il contient du HTML).
   Astuce :   = espace insécable (évite qu'un « : » passe seul à la ligne).
   ========================================================================== */
(function () {
  "use strict";

  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "portfolio-lang";

  const TRANSLATIONS = {
    en: {
      "meta.title": "Thibaud Derville — Web Developer & Data Analyst",
      "meta.description": "Portfolio of Thibaud Derville : former paratrooper, web developer and data analyst.",

      "nav.path": "About",
      "nav.projects": "Projects",
      "nav.cv": "CV",
      "nav.contact": "Contact",

      "hero.line1": "Web Developer",
      "hero.line2": "<em>&amp;</em> Data Analyst",
      "hero.text":
        "Six years in the French Army, from parachuting to leading a team, before turning to my passion : technology. I bring the rigor of the field to the precision of code and data.",
      "hero.cta": "Discover my projects",
      "hero.tagline": "From the field to code and data.",
      "hero.hey": "Hey, I’m Thibaud",
      "hero.p1": "Web development",
      "hero.p2": "Data analysis",
      "hero.p3": "Automation & AI",
      "hero.p4": "Team leadership",
      "hero.stack": "Tools I work with",
      "hero.badge": "WEB DEVELOPER • DATA ANALYST • WEB DEVELOPER • DATA ANALYST • ",

      "path.title": "About me",
      "path.army.period": "6 years",
      "path.army.title": "French Army — Paratrooper, Team Leader",
      "path.army.text":
        "Six years of service as a paratrooper, then team leader. I worked in Africa and in the French overseas territories, in international settings : discipline, responsibility, stress management and team cohesion.",
      "path.bts.period": "New beginning",
      "path.bts.title": "Associate Degree in Web Development",
      "path.bts.place": "Toulouse",
      "path.bachelor.place": "Paris",
      "path.bts.text":
        "Where my career in tech began : a comprehensive training in designing, building and securing web applications.",
      "path.skills.label": "Skills acquired",
      "path.bts.skills": [
        "Full-stack development",
        "Kanban",
        "Agile methods",
        "System architecture",
        "Web security",
        "GDPR"
      ],
      "path.bachelor.period": "Further studies",
      "path.bachelor.title": "Bachelor in Data Analysis",
      "path.bachelor.text":
        "A data-focused degree built on statistical rigor : collecting, cleaning, analysing and visualising data to turn it into clear insights that support decision-making.",
      "path.bachelor.skills": [
        "Descriptive & inferential statistics",
        "Machine learning",
        "SQL",
        "Power BI",
        "Python",
        "Seaborn",
        "Matplotlib",
        "Geomatics"
      ],
      "path.now.period": "Today",
      "path.now.title": "Always learning",
      "path.now.place": "Ongoing",
      "path.now.text":
        "Always in learning mode : I love to learn, I am curious about every new technology and I always want to know more. I grow through hands-on projects, gathered below.",
      "path.now.skills.label": "Currently learning",
      "path.now.skills": ["Agentic AI", "Claude", "Local LLMs"],

      "values.title": "Strengths",
      "values.rigor": "Rigor",
      "values.team": "Team spirit",
      "values.leadership": "Leadership",
      "values.curiosity": "Technical curiosity",
      "values.adaptability": "Adaptability",
      "values.resilience": "Resilience",
      "values.autonomy": "Autonomy",
      "values.responsibility": "Sense of responsibility",
      "values.rigor.desc": "Precise, disciplined work, from field operations to clean code.",
      "values.team.desc": "Team leader : I know how to bring out the best in a group.",
      "values.leadership.desc": "Six years leading a team in demanding environments.",
      "values.curiosity.desc": "Always testing new tools, from agentic AI to local LLMs.",
      "values.adaptability.desc": "Africa, overseas territories, new countries : I adapt fast.",
      "values.resilience.desc": "Used to pressure, I keep a clear head when it counts.",
      "values.autonomy.desc": "I take initiative and carry a project from idea to deployment.",
      "values.responsibility.desc": "I own my work and stand behind the results.",

      "interests.title": "Outside of work",
      "interests.sport.title": "Sport",
      "interests.sport.text": "A daily habit that keeps me balanced, and a way to keep challenging myself.",
      "interests.hiking.title": "Hiking",
      "interests.hiking.text": "Sport, nature and discovery all in one. Nothing clears my head like a good trail.",
      "interests.travel.title": "Travel",
      "interests.travel.text": "I had the opportunity to travel with the army, in the French overseas territories and in Africa. I then kept going in my own time, across many countries in Europe and in the Americas.",
      "interests.learning.title": "Learning",
      "interests.learning.text": "Curious by nature, I like to learn something new every day, in tech and beyond.",
      "interests.extreme.title": "Extreme sports",
      "interests.extreme.text": "I enjoy watching extreme sports, for the technique, the nerve and the limits they push.",

      "projects.title": "Projects",
      "projects.intro":
        "Here are a few projects I built to meet my own needs, in fields that interest me. Click on any of them to explore it. Please note that the experience differs between desktop and mobile\u00a0: browsing on a computer is always more comfortable.",
      "projects.soon": "Coming soon",
      "projects.view": "View project",
      "projects.code": "Source code",
      "projects.demo": "Live demo",
      "projects.featured.title": "Featured projects",
      "projects.featured.desc": "In-depth, standalone projects.",
      "projects.collections.title": "Project collections",
      "projects.collections.desc": "Several projects grouped in one place.",

      "contact.title": "Contact",
      "contact.lead": "A project, an opportunity, a question\u00a0?",

      "cv.title": "Curriculum Vitae",
      "cv.label": "Résumé",
      "cv.lead": "My experience, training and skills on a single page.",
      "cv.open": "View my CV",
      "cv.back": "Back to portfolio",
      "cv.download": "Download CV",
      "cv.hint": "In the print window, choose “Save as PDF”.",
      "cv.print.downloaded": "Downloaded on",
      "cv.sec.contact": "Contact",
      "cv.sec.profile": "Profile",
      "cv.sec.education": "Education",
      "cv.sec.skills": "Technical skills",
      "cv.sec.languages": "Languages",
      "cv.sec.experience": "Employment history",
      "cv.label.email": "Email",
      "cv.label.phone": "Phone",
      "cv.label.location": "Location",
      "cv.meta.title": "CV — Thibaud Derville",
      "cv.meta.description": "Curriculum vitae of Thibaud Derville : web developer and data analyst.",

      "footer.top": "Back to top ↑",
      "footer.about": "Web developer and data analyst, former paratrooper.",
      "footer.nav": "Navigate",
      "footer.home": "Home",
      "footer.social": "Elsewhere",
      "footer.built": "Built with HTML, CSS and JavaScript.",
      "footer.legal": "Legal notice",
      "legal.meta.title": "Legal notice — Thibaud Derville",
      "legal.meta.description": "Legal notice of the website of Thibaud Derville.",
      "legal.label": "Legal",
      "legal.title": "Legal notice",
      "legal.lead": "Information about this website, its publisher and the handling of data.",
      "legal.pub.t": "Publisher",
      "legal.pub.p": "This website is published by Thibaud Derville, an individual, in a personal capacity, to present his background and projects. Publication director\u00a0: Thibaud Derville.",
      "legal.contact.t": "Contact",
      "legal.host.t": "Hosting",
      "legal.host.p": "The website is hosted by GitHub Pages\u00a0: GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States (github.com).",
      "legal.data.t": "Personal data and cookies",
      "legal.data.p": "This website does not use cookies for tracking, advertising or audience measurement, and does not collect personal data. Your language choice is saved only in your own browser (local storage) to remember your preference\u00a0; it is never sent to a server. If you write to me by email, your address and message are used only to reply to you. In accordance with the GDPR, you can request access, correction or deletion of your data at any time by email.",
      "legal.third.t": "Third-party services",
      "legal.third.p": "The fonts (Inter and Cormorant Garamond) are loaded from Google Fonts, which may receive your IP address. Links to LinkedIn, GitHub and project demos lead to external websites with their own policies.",
      "legal.ip.t": "Intellectual property",
      "legal.ip.p": "Unless stated otherwise, the texts, illustrations and design of this website belong to Thibaud Derville. Reproduction without permission is prohibited. The flag of Cyprus comes from Wikimedia Commons (public domain). The fonts are distributed under the SIL Open Font License.",
      "legal.updated": "Last updated\u00a0: November 2026"
    },

    fr: {
      "meta.title": "Thibaud Derville — Développeur web & Data Analyst",
      "meta.description": "Portfolio de Thibaud Derville : ancien parachutiste, développeur web et data analyst.",

      "nav.path": "À propos",
      "nav.projects": "Projets",
      "nav.cv": "CV",
      "nav.contact": "Contact",

      "hero.line1": "Développeur web",
      "hero.line2": "<em>&amp;</em> Data Analyst",
      "hero.text":
        "Six années au service de l’armée, du saut en parachute au commandement d’une équipe, avant de me tourner vers ma passion : l’informatique. J’allie la rigueur du terrain à la précision du code et des données.",
      "hero.cta": "Découvrir mes projets",
      "hero.tagline": "Du terrain au code et à la donnée.",
      "hero.hey": "Bonjour, je suis Thibaud",
      "hero.p1": "Développement web",
      "hero.p2": "Analyse de données",
      "hero.p3": "Automatisation & IA",
      "hero.p4": "Leadership d’équipe",
      "hero.stack": "Outils que j’utilise",
      "hero.badge": "DÉVELOPPEUR WEB • DATA ANALYST • DÉVELOPPEUR WEB • DATA ANALYST • ",

      "path.title": "À propos de moi",
      "path.army.period": "6 ans",
      "path.army.title": "Armée de Terre — Parachutiste, chef d’équipe",
      "path.army.text":
        "Six années d’engagement en tant que parachutiste, puis chef d’équipe. J’ai travaillé en Afrique et en Outre-mer, dans des contextes internationaux : discipline, sens des responsabilités, gestion du stress et cohésion de groupe.",
      "path.bts.period": "Nouveau départ",
      "path.bts.title": "BTS Développement Web",
      "path.bts.place": "Toulouse",
      "path.bachelor.place": "Paris",
      "path.bts.text":
        "Le point de départ de ma carrière dans le numérique : une formation complète pour concevoir, développer et sécuriser des applications web.",
      "path.skills.label": "Compétences acquises",
      "path.bts.skills": [
        "Développement full stack",
        "Kanban",
        "Méthodes agiles",
        "Architecture système",
        "Sécurité web",
        "RGPD"
      ],
      "path.bachelor.period": "Poursuite d’études",
      "path.bachelor.title": "Licence Data Analyse",
      "path.bachelor.text":
        "Un cursus orienté données et fondé sur la rigueur statistique : collecter, nettoyer, analyser et visualiser la donnée pour en tirer des enseignements clairs au service de la décision.",
      "path.bachelor.skills": [
        "Statistiques descriptives et inférentielles",
        "Machine learning",
        "SQL",
        "Power BI",
        "Python",
        "Seaborn",
        "Matplotlib",
        "Géomatique"
      ],
      "path.now.period": "Aujourd’hui",
      "path.now.title": "Toujours en apprentissage",
      "path.now.place": "En cours",
      "path.now.text":
        "Toujours en phase d’apprentissage : j’aime apprendre, je suis curieux de toutes les nouvelles technologies et désireux d’en savoir toujours plus. Je progresse à travers des projets concrets, réunis ci-dessous.",
      "path.now.skills.label": "En cours d’apprentissage",
      "path.now.skills": ["IA agentique", "Claude", "LLM locaux"],

      "values.title": "Mes qualités",
      "values.rigor": "Rigueur",
      "values.team": "Esprit d’équipe",
      "values.leadership": "Leadership",
      "values.curiosity": "Curiosité technique",
      "values.adaptability": "Adaptabilité",
      "values.resilience": "Résilience",
      "values.autonomy": "Autonomie",
      "values.responsibility": "Sens des responsabilités",
      "values.rigor.desc": "Un travail précis et discipliné, des opérations de terrain au code propre.",
      "values.team.desc": "Chef d’équipe, je sais faire émerger le meilleur d’un groupe.",
      "values.leadership.desc": "Six années à diriger une équipe dans des environnements exigeants.",
      "values.curiosity.desc": "Toujours à tester de nouveaux outils, de l’IA agentique aux LLM locaux.",
      "values.adaptability.desc": "Afrique, Outre-mer, nouveaux pays : je m’adapte vite.",
      "values.resilience.desc": "Habitué à la pression, je garde la tête froide quand il le faut.",
      "values.autonomy.desc": "Je prends des initiatives et mène un projet de l’idée au déploiement.",
      "values.responsibility.desc": "J’assume mon travail et m’engage sur les résultats.",

      "interests.title": "En dehors du travail",
      "interests.sport.title": "Sport",
      "interests.sport.text": "Une habitude quotidienne qui m’équilibre, et une façon de continuer à me dépasser.",
      "interests.hiking.title": "Randonnée",
      "interests.hiking.text": "Sport, nature et découverte à la fois. Rien ne vide la tête comme un bon sentier.",
      "interests.travel.title": "Voyage",
      "interests.travel.text": "J’ai eu l’opportunité de voyager avec l’armée, en Outre-mer et en Afrique. J’ai ensuite continué sur mon temps personnel, dans de nombreux pays d’Europe et en Amérique.",
      "interests.learning.title": "Apprendre",
      "interests.learning.text": "Curieux de nature, j’aime apprendre quelque chose de nouveau chaque jour, en tech comme ailleurs.",
      "interests.extreme.title": "Sports extrêmes",
      "interests.extreme.text": "J’aime regarder les sports extrêmes, pour la technique, le sang-froid et les limites qu’ils repoussent.",

      "projects.title": "Projets",
      "projects.intro":
        "Voici quelques projets que j’ai réalisés pour répondre à mes propres besoins, dans des domaines qui m’intéressent. Cliquez sur l’un d’eux pour le découvrir. À noter : l’affichage diffère entre ordinateur et mobile, et la consultation sur PC reste toujours plus agréable.",
      "projects.soon": "Bientôt",
      "projects.view": "Voir le projet",
      "projects.code": "Code source",
      "projects.demo": "Démo en ligne",
      "projects.featured.title": "Projets phares",
      "projects.featured.desc": "Des projets uniques et approfondis.",
      "projects.collections.title": "Collections de projets",
      "projects.collections.desc": "Plusieurs projets réunis au même endroit.",

      "contact.title": "Contact",
      "contact.lead": "Un projet, une opportunité, une question ?",

      "cv.title": "Curriculum Vitae",
      "cv.label": "CV",
      "cv.lead": "Mon parcours, mes formations et mes compétences sur une seule page.",
      "cv.open": "Voir mon CV",
      "cv.back": "Retour au portfolio",
      "cv.download": "Télécharger le CV",
      "cv.hint": "Dans la fenêtre d’impression, choisissez « Enregistrer au format PDF ».",
      "cv.print.downloaded": "Téléchargé le",
      "cv.sec.contact": "Contact",
      "cv.sec.profile": "Profil",
      "cv.sec.education": "Formation",
      "cv.sec.skills": "Compétences techniques",
      "cv.sec.languages": "Langues",
      "cv.sec.experience": "Expérience professionnelle",
      "cv.label.email": "E-mail",
      "cv.label.phone": "Téléphone",
      "cv.label.location": "Localisation",
      "cv.meta.title": "CV — Thibaud Derville",
      "cv.meta.description": "Curriculum vitae de Thibaud Derville : développeur web et data analyst.",

      "footer.top": "Retour en haut ↑",
      "footer.about": "Développeur web et data analyst, ancien parachutiste.",
      "footer.nav": "Navigation",
      "footer.home": "Accueil",
      "footer.social": "Ailleurs",
      "footer.built": "Réalisé en HTML, CSS et JavaScript.",
      "footer.legal": "Mentions légales",
      "legal.meta.title": "Mentions légales — Thibaud Derville",
      "legal.meta.description": "Mentions légales du site de Thibaud Derville.",
      "legal.label": "Informations légales",
      "legal.title": "Mentions légales",
      "legal.lead": "Informations sur ce site, son éditeur et le traitement des données.",
      "legal.pub.t": "Éditeur",
      "legal.pub.p": "Ce site est édité par Thibaud Derville, personne physique, à titre personnel, pour présenter son parcours et ses projets. Directeur de la publication : Thibaud Derville.",
      "legal.contact.t": "Contact",
      "legal.host.t": "Hébergement",
      "legal.host.p": "Le site est hébergé par GitHub Pages : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis (github.com).",
      "legal.data.t": "Données personnelles et cookies",
      "legal.data.p": "Ce site n’utilise aucun cookie de suivi, de publicité ou de mesure d’audience et ne collecte aucune donnée personnelle. Votre choix de langue est enregistré uniquement dans votre navigateur (stockage local) pour mémoriser votre préférence ; il n’est jamais envoyé à un serveur. Si vous m’écrivez par e-mail, votre adresse et votre message ne servent qu’à vous répondre. Conformément au RGPD, vous pouvez demander à tout moment l’accès, la rectification ou la suppression de vos données par e-mail.",
      "legal.third.t": "Services tiers",
      "legal.third.p": "Les polices (Inter et Cormorant Garamond) sont chargées depuis Google Fonts, qui peut recevoir votre adresse IP. Les liens vers LinkedIn, GitHub et les démonstrations de projets mènent vers des sites externes soumis à leurs propres politiques.",
      "legal.ip.t": "Propriété intellectuelle",
      "legal.ip.p": "Sauf mention contraire, les textes, illustrations et la conception de ce site sont la propriété de Thibaud Derville. Toute reproduction sans autorisation est interdite. Le drapeau de Chypre provient de Wikimedia Commons (domaine public). Les polices sont distribuées sous licence SIL Open Font.",
      "legal.updated": "Dernière mise à jour : novembre 2026"
    },

    el: {
      "meta.title": "Thibaud Derville — Προγραμματιστής Web & Αναλυτής Δεδομένων",
      "meta.description": "Portfolio του Thibaud Derville : πρώην αλεξιπτωτιστής, προγραμματιστής web και αναλυτής δεδομένων.",

      "nav.path": "Σχετικά",
      "nav.projects": "Έργα",
      "nav.cv": "CV",
      "nav.contact": "Επικοινωνία",

      "hero.line1": "Προγραμματιστής Web",
      "hero.line2": "<em>&amp;</em> Αναλυτής Δεδομένων",
      "hero.text":
        "Έξι χρόνια στον γαλλικό στρατό, από το αλεξίπτωτο έως την ηγεσία μιας ομάδας, πριν στραφώ στο πάθος μου : την τεχνολογία. Συνδυάζω την πειθαρχία του πεδίου με την ακρίβεια του κώδικα και των δεδομένων.",
      "hero.cta": "Δείτε τα έργα μου",
      "hero.tagline": "Από το πεδίο στον κώδικα και τα δεδομένα.",
      "hero.hey": "Γεια σας, είμαι ο Thibaud",
      "hero.p1": "Ανάπτυξη web",
      "hero.p2": "Ανάλυση δεδομένων",
      "hero.p3": "Αυτοματοποίηση & AI",
      "hero.p4": "Ηγεσία ομάδας",
      "hero.stack": "Εργαλεία που χρησιμοποιώ",
      "hero.badge": "ΠΡΟΓΡΑΜΜΑΤΙΣΤΗΣ WEB • ΑΝΑΛΥΤΗΣ ΔΕΔΟΜΕΝΩΝ • PORTFOLIO • ",

      "path.title": "Σχετικά με εμένα",
      "path.army.period": "6 χρόνια",
      "path.army.title": "Γαλλικός Στρατός Ξηράς — Αλεξιπτωτιστής, αρχηγός ομάδας",
      "path.army.text":
        "Έξι χρόνια θητείας ως αλεξιπτωτιστής και στη συνέχεια ως αρχηγός ομάδας. Εργάστηκα στην Αφρική και στα υπερπόντια εδάφη της Γαλλίας, σε διεθνές περιβάλλον : πειθαρχία, υπευθυνότητα, διαχείριση άγχους και συνοχή της ομάδας.",
      "path.bts.period": "Νέα αρχή",
      "path.bts.title": "Associate Degree Ανάπτυξης Web",
      "path.bts.place": "Τουλούζη",
      "path.bachelor.place": "Παρίσι",
      "path.bts.text":
        "Η αφετηρία της καριέρας μου στην τεχνολογία : ολοκληρωμένη εκπαίδευση στον σχεδιασμό, την ανάπτυξη και την ασφάλεια web εφαρμογών.",
      "path.skills.label": "Δεξιότητες που απέκτησα",
      "path.bts.skills": [
        "Full-stack ανάπτυξη",
        "Kanban",
        "Ευέλικτες (Agile) μέθοδοι",
        "Αρχιτεκτονική συστημάτων",
        "Ασφάλεια web",
        "GDPR"
      ],
      "path.bachelor.period": "Συνέχεια σπουδών",
      "path.bachelor.title": "Πτυχίο Ανάλυσης Δεδομένων",
      "path.bachelor.text":
        "Ένα πρόγραμμα με επίκεντρο τα δεδομένα και τη στατιστική αυστηρότητα : συλλογή, καθαρισμός, ανάλυση και οπτικοποίηση δεδομένων για σαφή συμπεράσματα που στηρίζουν τις αποφάσεις.",
      "path.bachelor.skills": [
        "Περιγραφική και επαγωγική στατιστική",
        "Machine learning",
        "SQL",
        "Power BI",
        "Python",
        "Seaborn",
        "Matplotlib",
        "Γεωπληροφορική"
      ],
      "path.now.period": "Σήμερα",
      "path.now.title": "Πάντα σε φάση μάθησης",
      "path.now.place": "Σε εξέλιξη",
      "path.now.text":
        "Πάντα σε φάση μάθησης : μου αρέσει να μαθαίνω, είμαι περίεργος για κάθε νέα τεχνολογία και θέλω να μαθαίνω ολοένα περισσότερα. Εξελίσσομαι μέσα από πραγματικά έργα, που θα βρείτε παρακάτω.",
      "path.now.skills.label": "Μαθαίνω αυτή τη στιγμή",
      "path.now.skills": ["Agentic AI", "Claude", "Τοπικά LLM"],

      "values.title": "Τα δυνατά μου σημεία",
      "values.rigor": "Ακρίβεια",
      "values.team": "Ομαδικό πνεύμα",
      "values.leadership": "Ηγεσία",
      "values.curiosity": "Τεχνική περιέργεια",
      "values.adaptability": "Προσαρμοστικότητα",
      "values.resilience": "Ανθεκτικότητα",
      "values.autonomy": "Αυτονομία",
      "values.responsibility": "Αίσθηση ευθύνης",
      "values.rigor.desc": "Ακριβής και πειθαρχημένη δουλειά, από τις επιχειρήσεις πεδίου έως τον καθαρό κώδικα.",
      "values.team.desc": "Ως αρχηγός ομάδας, ξέρω να αναδεικνύω το καλύτερο μιας ομάδας.",
      "values.leadership.desc": "Έξι χρόνια ηγεσίας μιας ομάδας σε απαιτητικά περιβάλλοντα.",
      "values.curiosity.desc": "Δοκιμάζω συνεχώς νέα εργαλεία, από το agentic AI έως τα τοπικά LLM.",
      "values.adaptability.desc": "Αφρική, υπερπόντια εδάφη, νέες χώρες : προσαρμόζομαι γρήγορα.",
      "values.resilience.desc": "Συνηθισμένος στην πίεση, κρατώ την ψυχραιμία μου όταν χρειάζεται.",
      "values.autonomy.desc": "Παίρνω πρωτοβουλίες και οδηγώ ένα έργο από την ιδέα έως τη δημοσίευση.",
      "values.responsibility.desc": "Αναλαμβάνω την ευθύνη της δουλειάς μου και των αποτελεσμάτων της.",

      "interests.title": "Εκτός δουλειάς",
      "interests.sport.title": "Άθληση",
      "interests.sport.text": "Μια καθημερινή συνήθεια που με ισορροπεί και ένας τρόπος να ξεπερνώ συνεχώς τον εαυτό μου.",
      "interests.hiking.title": "Πεζοπορία",
      "interests.hiking.text": "Άθληση, φύση και ανακάλυψη μαζί. Τίποτα δεν καθαρίζει το μυαλό όσο ένα καλό μονοπάτι.",
      "interests.travel.title": "Ταξίδια",
      "interests.travel.text": "Είχα την ευκαιρία να ταξιδέψω με τον στρατό, στα υπερπόντια εδάφη της Γαλλίας και στην Αφρική. Συνέχισα έπειτα στον προσωπικό μου χρόνο, σε πολλές χώρες της Ευρώπης και στην Αμερική.",
      "interests.learning.title": "Μάθηση",
      "interests.learning.text": "Περίεργος από φύση, μου αρέσει να μαθαίνω κάτι νέο κάθε μέρα, στην τεχνολογία και όχι μόνο.",
      "interests.extreme.title": "Ακραία σπορ",
      "interests.extreme.text": "Μου αρέσει να παρακολουθώ ακραία σπορ, για την τεχνική, το ψυχικό σθένος και τα όρια που ξεπερνούν.",

      "projects.title": "Έργα",
      "projects.intro":
        "Ακολουθούν μερικά έργα που δημιούργησα για να καλύψω δικές μου ανάγκες, σε τομείς που με ενδιαφέρουν. Κάντε κλικ σε οποιοδήποτε για να το εξερευνήσετε. Σημειώστε ότι η εμπειρία διαφέρει ανάμεσα σε υπολογιστή και κινητό : η περιήγηση από υπολογιστή είναι πάντα πιο ευχάριστη.",
      "projects.soon": "Σύντομα",
      "projects.view": "Δείτε το έργο",
      "projects.code": "Πηγαίος κώδικας",
      "projects.demo": "Ζωντανή επίδειξη",
      "projects.featured.title": "Κύρια έργα",
      "projects.featured.desc": "Αυτόνομα και εκτενή έργα.",
      "projects.collections.title": "Συλλογές έργων",
      "projects.collections.desc": "Πολλά έργα συγκεντρωμένα σε ένα σημείο.",

      "contact.title": "Επικοινωνία",
      "contact.lead": "Ένα έργο, μια ευκαιρία, μια ερώτηση\u00a0;",

      "cv.title": "Βιογραφικό",
      "cv.label": "CV",
      "cv.lead": "Η πορεία, η εκπαίδευση και οι δεξιότητές μου σε μία σελίδα.",
      "cv.open": "Δείτε το βιογραφικό μου",
      "cv.back": "Επιστροφή στο portfolio",
      "cv.download": "Λήψη βιογραφικού",
      "cv.hint": "Στο παράθυρο εκτύπωσης, επιλέξτε «Αποθήκευση ως PDF».",
      "cv.print.downloaded": "Λήψη στις",
      "cv.sec.contact": "Επικοινωνία",
      "cv.sec.profile": "Προφίλ",
      "cv.sec.education": "Εκπαίδευση",
      "cv.sec.skills": "Τεχνικές δεξιότητες",
      "cv.sec.languages": "Γλώσσες",
      "cv.sec.experience": "Επαγγελματική εμπειρία",
      "cv.label.email": "Email",
      "cv.label.phone": "Τηλέφωνο",
      "cv.label.location": "Τοποθεσία",
      "cv.meta.title": "Βιογραφικό — Thibaud Derville",
      "cv.meta.description": "Βιογραφικό του Thibaud Derville : προγραμματιστής web και αναλυτής δεδομένων.",

      "footer.top": "Επιστροφή πάνω ↑",
      "footer.about": "Προγραμματιστής web και αναλυτής δεδομένων, πρώην αλεξιπτωτιστής.",
      "footer.nav": "Πλοήγηση",
      "footer.home": "Αρχική",
      "footer.social": "Αλλού",
      "footer.built": "Φτιαγμένο με HTML, CSS και JavaScript.",
      "footer.legal": "Νομικές πληροφορίες",
      "legal.meta.title": "Νομικές πληροφορίες — Thibaud Derville",
      "legal.meta.description": "Νομικές πληροφορίες του ιστότοπου του Thibaud Derville.",
      "legal.label": "Νομικά",
      "legal.title": "Νομικές πληροφορίες",
      "legal.lead": "Πληροφορίες για τον ιστότοπο, τον εκδότη του και τη διαχείριση των δεδομένων.",
      "legal.pub.t": "Εκδότης",
      "legal.pub.p": "Ο ιστότοπος εκδίδεται από τον Thibaud Derville, φυσικό πρόσωπο, σε προσωπική βάση, για την παρουσίαση της πορείας και των έργων του. Υπεύθυνος έκδοσης\u00a0: Thibaud Derville.",
      "legal.contact.t": "Επικοινωνία",
      "legal.host.t": "Φιλοξενία",
      "legal.host.p": "Ο ιστότοπος φιλοξενείται από το GitHub Pages\u00a0: GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Ηνωμένες Πολιτείες (github.com).",
      "legal.data.t": "Προσωπικά δεδομένα και cookies",
      "legal.data.p": "Ο ιστότοπος δεν χρησιμοποιεί cookies παρακολούθησης, διαφήμισης ή μέτρησης επισκεψιμότητας και δεν συλλέγει προσωπικά δεδομένα. Η επιλογή γλώσσας αποθηκεύεται μόνο στο πρόγραμμα περιήγησής σας (τοπική αποθήκευση) για να θυμάται την προτίμησή σας· δεν αποστέλλεται ποτέ σε διακομιστή. Αν μου στείλετε email, η διεύθυνση και το μήνυμά σας χρησιμοποιούνται μόνο για να σας απαντήσω. Σύμφωνα με τον GDPR, μπορείτε ανά πάσα στιγμή να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των δεδομένων σας μέσω email.",
      "legal.third.t": "Υπηρεσίες τρίτων",
      "legal.third.p": "Οι γραμματοσειρές (Inter και Cormorant Garamond) φορτώνονται από το Google Fonts, το οποίο μπορεί να λαμβάνει τη διεύθυνση IP σας. Οι σύνδεσμοι προς LinkedIn, GitHub και τις επιδείξεις έργων οδηγούν σε εξωτερικούς ιστότοπους με τις δικές τους πολιτικές.",
      "legal.ip.t": "Πνευματική ιδιοκτησία",
      "legal.ip.p": "Εκτός αν αναφέρεται διαφορετικά, τα κείμενα, οι εικονογραφήσεις και ο σχεδιασμός του ιστότοπου ανήκουν στον Thibaud Derville. Απαγορεύεται η αναπαραγωγή χωρίς άδεια. Η σημαία της Κύπρου προέρχεται από το Wikimedia Commons (κοινό κτήμα). Οι γραμματοσειρές διανέμονται με άδεια SIL Open Font.",
      "legal.updated": "Τελευταία ενημέρωση\u00a0: Νοέμβριος 2026"
    }
  };

  const LANGS = Object.keys(TRANSLATIONS);
  let current = DEFAULT_LANG;

  function readStored() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return LANGS.includes(v) ? v : null;
    } catch (e) {
      return null;
    }
  }

  function t(key) {
    return (TRANSLATIONS[current] && TRANSLATIONS[current][key]) ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
  }

  /* Pour les contenus saisis dans projects.js : texte simple ou { en, fr, el } */
  function loc(value) {
    if (value && typeof value === "object") {
      return value[current] ?? value[DEFAULT_LANG] ?? Object.values(value)[0] ?? "";
    }
    return value ?? "";
  }

  function apply() {
    document.documentElement.lang = current;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    // Listes de compétences : la clé pointe vers un tableau de textes
    document.querySelectorAll("[data-i18n-list]").forEach((ul) => {
      const items = t(ul.dataset.i18nList);
      ul.replaceChildren(
        ...(Array.isArray(items) ? items : []).map((txt) => {
          const li = document.createElement("li");
          li.textContent = txt;
          return li;
        })
      );
    });

    // Chaque page peut avoir ses propres titre/description (data-title-key / data-desc-key sur <body>)
    document.title = t(document.body.dataset.titleKey || "meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(document.body.dataset.descKey || "meta.description"));

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === current;
      btn.setAttribute("aria-pressed", String(active));
      btn.classList.toggle("is-active", active);
    });
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    current = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  current = readStored() || DEFAULT_LANG;
  apply();

  window.i18n = { t, loc, setLang, get lang() { return current; } };
})();
