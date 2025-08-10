import { images } from './images'

export const projects = [
  {
    key: "kny",
    title: "Présentation kimetsu no yaiba",
    description: [
      "Un site de présentation de l'anime Kimetsu no Yaiba ou Demon Slayer de Koyoharu Goutouge et produit par Ufotable."
    ],
    slides: [
      { img: images.kny1, alt: "Présentation 1" },
      { img: images.kny2, alt: "Présentation 2" }
    ],
    technos: [
      { name: "HTML", percentage: 70 },
      { name: "CSS", percentage: 25 },
      { name: "JS", percentage: 5 }
    ],
    tags: ["anime", "react"]
  },
  {
    key: "pcbp",
    title: "Pc buying pro",
    description: [
      "Achetez des composants ou des tours déjà montées. Site programmé avec le modèle MVC."
    ],
    slides: [
      { img: images.pcbp1, alt: "Admin" },
      { img: images.pcbp2, alt: "Liste 1" },
      { img: images.pcbp3, alt: "Liste 2" },
      { img: images.pcbp4, alt: "Produit" }
    ],
    technos: [
      { name: "PHP", percentage: 32 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 19 },
      { name: "SQL", percentage: 11 },
      { name: "JS", percentage: 8 }
    ],
    tags: ["e-commerce", "mvc"]
  },
  {
    key: "streamingWorld",
    title: "Streaming world",
    description: [
      "Regardez vos animes préférés et accédez à la boutique en ligne. Présentation des personnages principaux en streaming."
    ],
    slides: [
      { img: images.streamingWorld1, alt: "Episodes" },
      { img: images.streamingWorld2, alt: "Détails produits" },
      { img: images.streamingWorld3, alt: "Produits" },
      { img: images.streamingWorld4, alt: "Streaming" }
    ],
    technos: [
      { name: "HTML", percentage: 60 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 12 },
      { name: "SQL", percentage: 6 },
      { name: "JS", percentage: 2 }
    ],
    tags: ["anime", "mvc"]
  },
  {
    key: "evilHunter",
    title: "Evil hunter",
    description: [
      "Mini jeu JS/JQuery : combattez des monstres la nuit pour survivre !"
    ],
    slides: [
      { img: images.evilHunter, alt: "evil hunter" }
    ],
    technos: [
      { name: "JS", percentage: 52 },
      { name: "CSS", percentage: 31 },
      { name: "HTML", percentage: 17 }
    ],
    tags: ["jeu", "js"]
  },
  {
    key: "chat",
    title: "Tchat numérique",
    description: [
      "Tchat en temps réel avec espace offres d'emploi. PHP orienté objet et API."
    ],
    slides: [
      { img: images.tchat1, alt: "Tchat 1" },
      { img: images.tchat2, alt: "Tchat 2" }
    ],
    technos: [
      { name: "PHP", percentage: 33 },
      { name: "HTML", percentage: 29 },
      { name: "CSS", percentage: 23 },
      { name: "JS", percentage: 9 },
      { name: "SQL", percentage: 6 }
    ],
    tags: ["tchat", "php"]
  },
  {
    key: "pacman",
    title: "Pacman race",
    description: [
      "Mini jeu Pacman JS : qui mangera le plus de fruits ?"
    ],
    slides: [
      { img: images.pacman, alt: "pacman" }
    ],
    technos: [
      { name: "JS", percentage: 97 },
      { name: "HTML", percentage: 1.5 },
      { name: "CSS", percentage: 1.5 }
    ],
    tags: ["jeu", "js"]
  },
  {
    key: "card",
    title: "Animation carte de paiement",
    description: [
      "Animation de carte de paiement pour un visuel plus attrayant !"
    ],
    video: images.card,
    technos: [
      { name: "HTML", percentage: 40 },
      { name: "CSS", percentage: 30 },
      { name: "JS", percentage: 30 }
    ],
    tags: ["animation", "css"]
  },
  {
    key: "pegasus",
    title: "Vente de voitures",
    description: [
      "Frontend d'un site de vente de voitures."
    ],
    slides: [
      { img: images.pegasus, alt: "pegasus" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 35 },
      { name: "JS", percentage: 15 }
    ],
    tags: ["frontend"]
  },
  {
    key: "tasbeeh",
    title: "Tasbeeh",
    description: [
      "Application utilisant une API de Quran pour lire, écouter ou faire des évocations."
    ],
    slides: [
      { img: images.tasbeeh1, alt: "Tasbeeh 1" },
      { img: images.tasbeeh2, alt: "Tasbeeh 2" },
      { img: images.tasbeeh3, alt: "Tasbeeh 3" },
      { img: images.tasbeeh4, alt: "Tasbeeh 4" }
    ],
    technos: [
      { name: "HTML", percentage: 66 },
      { name: "CSS", percentage: 24 },
      { name: "JS", percentage: 10 }
    ],
    tags: ["api", "quran"]
  },
  {
    key: "formateur",
    title: "Liste de formateurs",
    description: [
      "Import d'un fichier excel de formateurs, gestion en base de données."
    ],
    slides: [
      { img: images.formateur, alt: "formateur" }
    ],
    technos: [
      { name: "JS", percentage: 35 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 8 },
      { name: "SQL", percentage: 7 }
    ],
    tags: ["gestion", "excel"]
  },
  {
    key: "myStockage",
    title: "myStockage",
    description: [
      "Vérification d'état de sites (en ligne, stockage BDD, stockage FTP)."
    ],
    slides: [
      { img: images.myStockage, alt: "stockage" }
    ],
    technos: [
      { name: "PHP", percentage: 47 },
      { name: "HTML", percentage: 26 },
      { name: "CSS", percentage: 21 },
      { name: "SQL", percentage: 6 }
    ],
    tags: ["php", "bdd"]
  },
  {
    key: "monades",
    title: "Présentation entreprise",
    description: [
      "Site de présentation d'entreprise fait avec React."
    ],
    slides: [
      { img: images.monades1, alt: "Monades 1" },
      { img: images.monades2, alt: "Monades 2" },
      { img: images.monades3, alt: "Monades 3" }
    ],
    technos: [
      { name: "REACT", percentage: 80 },
      { name: "NODEJS", percentage: 20 }
    ],
    tags: ["react", "entreprise"]
  },
  {
    key: "ps3Ui",
    title: "Playstation 3 UI",
    description: [
      "Reproduction de la navigation de la console Playstation 3."
    ],
    slides: [
      { img: images.ps3Ui, alt: "ps3 ui" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 15 },
      { name: "JS", percentage: 35 }
    ],
    tags: ["ui", "js"]
  },
  {
    key: "evasion",
    title: "Présentation entreprise",
    description: [
      "Projet EVASION du département des Hauts-de-Seine : gestion de contenus VR accessibles sur tablette et création de contenus VR."
    ],
    slides: [
      { img: images.evasion1, alt: "Evasion 1" },
      { img: images.evasion2, alt: "Evasion 2" },
      { img: images.evasion3, alt: "Evasion 3" },
      { img: images.evasion4, alt: "Evasion 4" }
    ],
    technos: [
      { name: "REACT", percentage: 60 },
      { name: "SYMFONY", percentage: 30 },
      { name: "FFMPEG", percentage: 8 },
      { name: "STORYBOOK", percentage: 2 }
    ],
    tags: ["react", "vr"]
  },
  {
    key: "linked",
    title: "Présentation entreprise",
    description: [
      "Application pour suivre les horaires de prières de la mosquée et les actualités."
    ],
    slides: [
      { img: images.linked1, alt: "Linked 1" },
      { img: images.linked2, alt: "Linked 2" },
      { img: images.linked3, alt: "Linked 3" },
      { img: images.linked4, alt: "Linked 4" }
    ],
    technos: [
      { name: "REACT NATIVE", percentage: 80 },
      { name: "PHP", percentage: 20 }
    ],
    tags: ["react native", "mobile"]
  },
  {
    key: "todoreaction",
    title: "ToDo'Réac'tion",
    description: [
      "ToDo'Réac'tion est une application de gestion de tâches moderne, réalisée avec React Native, Redux Toolkit et Expo Router.",
      "Fonctionnalités :",
      "- Ajout, édition et suppression de tâches",
      "- Gestion de la date et de l'heure d'échéance pour chaque tâche",
      "- Catégorisation des tâches, couleurs personnalisées, filtres par catégorie",
      "- Thèmes visuels persistants",
      "- Interface moderne et responsive"
    ],
    slides: [
      { img: images.todoreaction1, alt: "todoreaction 1" },
      { img: images.todoreaction2, alt: "todoreaction 2" },
      { img: images.todoreaction3, alt: "todoreaction 3" },
      { img: images.todoreaction4, alt: "todoreaction 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ],
    tags: ["react native", "mobile"]
  },
  {
    key: "gachanote",
    title: "GachaNote",
    description: [
      "GachaNote est l’outil idéal pour tous les joueurs de jeux gacha qui souhaitent :",
      "- Suivre précisément leurs dépenses et tirages sur chaque jeu.",
      "- Visualiser leur historique et leurs statistiques.",
      "- Prendre conscience de leurs habitudes de consommation.",
      "- Comparer leurs dépenses entre plusieurs jeux et sur différentes périodes."
    ],
    slides: [
      { img: images.gachanote1, alt: "gachanote 1" },
      { img: images.gachanote2, alt: "gachanote 2" },
      { img: images.gachanote3, alt: "gachanote 3" },
      { img: images.gachanote4, alt: "gachanote 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ],
    tags: ["react native", "mobile", "gacha"]
  },
  {
    key: "jiamini",
    title: "Jiamini",
    description: [
      "Jiamini est une application mobile qui facilite l'apprentissage scolaire en Afrique en proposant des cours adaptés (PDF, vidéo, image, jeu).",
      "Elle propose aussi l'histoire de personnages historiques selon le pays sélectionné."
    ],
    slides: [
      { img: images.jiamini1, alt: "jiamini 1" },
      { img: images.jiamini2, alt: "jiamini 2" },
      { img: images.jiamini3, alt: "jiamini 3" },
      { img: images.jiamini4, alt: "jiamini 4" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "JAVA (BACK)", percentage: 30 },
      { name: "REACT NATIVE", percentage: 15 },
      { name: "POSTGRESQL", percentage: 15 }
    ],
    tags: ["react native", "mobile", "éducation"]
  },
  {
    key: "eclat",
    title: "Éclat Solidaire",
    description: [
      "Éclat Solidaire est un site qui recense les associations ayant peu de visibilité et les événements disponibles.",
      "On peut s'inscrire bénévolement à une association et faire des dons si on le souhaite."
    ],
    slides: [
      { img: images.eclat1, alt: "eclat 1" },
      { img: images.eclat2, alt: "eclat 2" },
      { img: images.eclat3, alt: "eclat 3" },
      { img: images.eclat4, alt: "eclat 4" },
      { img: images.eclat5, alt: "eclat 5" },
      { img: images.eclat6, alt: "eclat 6" },
      { img: images.eclat7, alt: "eclat 7" }
    ],
    technos: [
      { name: "REACT", percentage: 50 },
      { name: "NODEJS", percentage: 30 },
      { name: "JAVASCRIPT", percentage: 20 }
    ],
    tags: ["react", "association"]
  }
]