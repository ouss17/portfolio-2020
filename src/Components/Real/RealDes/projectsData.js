import knySlide1 from '../../../Images/kny1.png'
import knySlide2 from '../../../Images/kny2.png'
import evilHunter from '../../../Images/evil_hunter.png'
import pacman from '../../../Images/pacman.png'
import pegasus from '../../../Images/pegasus_car.png'
import formateur from '../../../Images/client_formateur.png'
import myStockage from '../../../Images/verif_sites.png'
import pcbpSlide1 from '../../../Images/pcbp-admin.png'
import pcbpSlide2 from '../../../Images/pcbp-list1.png'
import pcbpSlide3 from '../../../Images/pcbp-list2.png'
import pcbpSlide4 from '../../../Images/pcbp-produit.png'
import streamingWorldSlide1 from '../../../Images/streaming_world_episodes.png'
import streamingWorldSlide2 from '../../../Images/streaming_world_products_details.png'
import streamingWorldSlide3 from '../../../Images/streaming_world_products.png'
import streamingWorldSlide4 from '../../../Images/streaming_world_streaming.png'
import tchatSlide1 from '../../../Images/chat_num.png'
import tchatSlide2 from '../../../Images/chat_num1.png'
import card from '../../../Images/card_number.mp4'
import tasbeehSlide1 from '../../../Images/tasbeeh1.jpg'
import tasbeehSlide2 from '../../../Images/tasbeeh2.jpg'
import tasbeehSlide3 from '../../../Images/tasbeeh3.jpg'
import tasbeehSlide4 from '../../../Images/tasbeeh4.jpg'
import monadesSlide1 from '../../../Images/monades1.png'
import monadesSlide2 from '../../../Images/monades2.png'
import monadesSlide3 from '../../../Images/monades3.png'
import evasionSlide1 from '../../../Images/evasion1.png'
import evasionSlide2 from '../../../Images/evasion2.png'
import evasionSlide3 from '../../../Images/evasion3.png'
import evasionSlide4 from '../../../Images/evasion5.png'
import linkedSlide1 from '../../../Images/linked1.jpg'
import linkedSlide2 from '../../../Images/linked2.jpg'
import linkedSlide3 from '../../../Images/linked3.jpg'
import linkedSlide4 from '../../../Images/linked4.jpg'
import ps3Ui from '../../../Images/ps3_ui.png'
import todoreaction1 from '../../../Images/todoreaction1.jpg'
import todoreaction2 from '../../../Images/todoreaction2.jpg'
import todoreaction3 from '../../../Images/todoreaction3.jpg'
import todoreaction4 from '../../../Images/todoreaction4.jpg'
import gachanote1 from '../../../Images/gachanote1.jpg'
import gachanote2 from '../../../Images/gachanote2.jpg'
import gachanote3 from '../../../Images/gachanote3.jpg'
import gachanote4 from '../../../Images/gachanote4.jpg'
import jiamini1 from '../../../Images/jiamini1.png'
import jiamini2 from '../../../Images/jiamini2.png'
import jiamini3 from '../../../Images/jiamini3.png'
import jiamini4 from '../../../Images/jiamini4.png'
import eclat1 from '../../../Images/eclat1.png'
import eclat2 from '../../../Images/eclat2.png'
import eclat3 from '../../../Images/eclat3.png'
import eclat4 from '../../../Images/eclat4.png'
import eclat5 from '../../../Images/eclat5.png'
import eclat6 from '../../../Images/eclat6.png'
import eclat7 from '../../../Images/eclat7.png'

export const projects = [
  {
    key: "kny",
    title: "Présentation kimetsu no yaiba",
    description: `Un site de présentation de l'anime "Kimetsu no Yaiba" ou "Demon Slayer" de Koyoharu Goutouge et produit par Ufotable`,
    slides: [
      { img: knySlide1, alt: "presentation" },
      { img: knySlide2, alt: "presentation" }
    ],
    technos: [
      { name: "HTML", percentage: 70 },
      { name: "CSS", percentage: 25 },
      { name: "JS", percentage: 5 }
    ]
  },
  {
    key: "pcbp",
    title: "Pc buying pro",
    description: `Vous avez besoin d'acheter un ordinateur ou des composants de tour? Rendez-vous sur Computer Buying Pro ! Vous trouverez sur ce site des composants comme carte graphique, carte mère, processeur pour personnaliser votre ordinateur. Et si vous ne savez pas où vous diriger, ne vous inquiétez pas ! Nous vendons aussi des tours déjà montées avec leurs composants! Ce site à été programmé avec le modèle MVC.`,
    slides: [
      { img: pcbpSlide1, alt: "presentation" },
      { img: pcbpSlide2, alt: "presentation" },
      { img: pcbpSlide3, alt: "presentation" },
      { img: pcbpSlide4, alt: "presentation" }
    ],
    technos: [
      { name: "PHP", percentage: 32 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 19 },
      { name: "SQL", percentage: 11 },
      { name: "JS", percentage: 8 }
    ]
  },
  {
    key: "streamingWorld",
    title: "Streaming world",
    description: `Fan de mangas et d'animes? Sur Streaming-world, retrouvez les épisodes de vos animes préférés et accédez à la boutique en ligne avec paiement sécurisé pour y voir figurines, accessoires, blu-ray et tomes disponibles ! En prime, une petite présentation du manga de votre choix à été faite dans la section artworks. N'hésitez pas ! Ce site à été programmé avec le modèle MVC. La partie artworks est un site de présentation des animes avec leur personnages principaux proposés en streaming. C'est un peu comme un deuxième site intégré dans streaming-world.`,
    slides: [
      { img: streamingWorldSlide1, alt: "presentation" },
      { img: streamingWorldSlide2, alt: "presentation" },
      { img: streamingWorldSlide3, alt: "presentation" },
      { img: streamingWorldSlide4, alt: "presentation" }
    ],
    technos: [
      { name: "HTML", percentage: 60 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 12 },
      { name: "SQL", percentage: 6 },
      { name: "JS", percentage: 2 }
    ]
  },
  {
    key: "evilHunter",
    title: "Evil hunter",
    description: `Un mini jeu qui exploite les fonctionnalités js et jquery. Menez votre personnage à la victoire en combattant des monstres la nuit pour survivre!`,
    slides: [
      { img: evilHunter, alt: "evil hunter" }
    ],
    technos: [
      { name: "JS", percentage: 52 },
      { name: "CSS", percentage: 31 },
      { name: "HTML", percentage: 17 }
    ]
  },
  {
    key: "chat",
    title: "Tchat numérique",
    description: `Un site de tchat à discussion en temps réel entre les utilisateurs. Un espace d'offres d'emploi est disponible pour les demandeurs d'emploi. Ce site à été programmé en PHP orienté objet et en utilisant des API.`,
    slides: [
      { img: tchatSlide1, alt: "presentation" },
      { img: tchatSlide2, alt: "presentation" }
    ],
    technos: [
      { name: "PHP", percentage: 33 },
      { name: "HTML", percentage: 29 },
      { name: "CSS", percentage: 23 },
      { name: "JS", percentage: 9 },
      { name: "SQL", percentage: 6 }
    ]
  },
  {
    key: "pacman",
    title: "Pacman race",
    description: `Un mini jeu Pacman réalisé en JS : qui de vous ou du Pacman adverse mangera le plus de fruits en premier ?`,
    slides: [
      { img: pacman, alt: "pacman" }
    ],
    technos: [
      { name: "JS", percentage: 97 },
      { name: "HTML", percentage: 1.5 },
      { name: "CSS", percentage: 1.5 }
    ]
  },
  {
    key: "card",
    title: "Animation carte de paiement",
    description: "Une simple animation de carte de paiement pour un visuel plus attrayant !",
    video: card,
    technos: [
      { name: "HTML", percentage: 40 },
      { name: "CSS", percentage: 30 },
      { name: "JS", percentage: 30 }
    ]
  },
  {
    key: "pegasus",
    title: "Vente de voitures",
    description: "Frontend d'un site de vente de voitures.",
    slides: [
      { img: pegasus, alt: "pegasus" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 35 },
      { name: "JS", percentage: 15 }
    ]
  },
  {
    key: "tasbeeh",
    title: "Tasbeeh",
    description: "Application utilisant une API de Quran pour lire, écouter ou faire des évocations.",
    slides: [
      { img: tasbeehSlide1, alt: "presentation" },
      { img: tasbeehSlide2, alt: "presentation" },
      { img: tasbeehSlide3, alt: "presentation" },
      { img: tasbeehSlide4, alt: "presentation" }
    ],
    technos: [
      { name: "HTML", percentage: 66 },
      { name: "CSS", percentage: 24 },
      { name: "JS", percentage: 10 }
    ]
  },
  {
    key: "formateur",
    title: "Liste de formateurs",
    description: "Page d'import d'un fichier excel de formateurs, le tout traité en base de données pour pouvoir intéragir avec les données.",
    slides: [
      { img: formateur, alt: "formateur" }
    ],
    technos: [
      { name: "JS", percentage: 35 },
      { name: "HTML", percentage: 30 },
      { name: "CSS", percentage: 20 },
      { name: "PHP", percentage: 8 },
      { name: "SQL", percentage: 7 }
    ]
  },
  {
    key: "myStockage",
    title: "myStockage",
    description: "Page de vérification d'état de sites (en ligne, stockage en base de données, stockage ftp).",
    slides: [
      { img: myStockage, alt: "stockage" }
    ],
    technos: [
      { name: "PHP", percentage: 47 },
      { name: "HTML", percentage: 26 },
      { name: "CSS", percentage: 21 },
      { name: "SQL", percentage: 6 }
    ]
  },
  {
    key: "monades",
    title: "Présentation entreprise",
    description: "Un site de présentation d'entreprise fait avec React",
    slides: [
      { img: monadesSlide1, alt: "presentation" },
      { img: monadesSlide2, alt: "presentation" },
      { img: monadesSlide3, alt: "presentation" }
    ],
    technos: [
      { name: "REACT", percentage: 80 },
      { name: "NODEJS", percentage: 20 }
    ]
  },
  {
    key: "ps3Ui",
    title: "Playstation 3 UI",
    description: "Reproduction de la navigation de la console playstation 3.",
    slides: [
      { img: ps3Ui, alt: "ps3 ui" }
    ],
    technos: [
      { name: "HTML", percentage: 50 },
      { name: "CSS", percentage: 15 },
      { name: "JS", percentage: 35 }
    ]
  },
  {
    key: "evasion",
    title: "Présentation entreprise",
    description: `Projet "EVASION" du département des Hauts-de-Seine : Création et gestion du site regroupant plusieurs contenus VR accessibles sur tablette ainsi que la création de son propre contenu VR !`,
    slides: [
      { img: evasionSlide1, alt: "presentation" },
      { img: evasionSlide2, alt: "presentation" },
      { img: evasionSlide3, alt: "presentation" },
      { img: evasionSlide4, alt: "presentation" }
    ],
    technos: [
      { name: "REACT", percentage: 60 },
      { name: "SYMFONY", percentage: 30 },
      { name: "FFMPEG", percentage: 8 },
      { name: "STORYBOOK", percentage: 2 }
    ]
  },
  {
    key: "linked",
    title: "Présentation entreprise",
    description: `Application permettant de se mettre à jour sur les horaires de prières de la mosquée et d'être au courant des nouvelles actualités !`,
    slides: [
      { img: linkedSlide1, alt: "presentation" },
      { img: linkedSlide2, alt: "presentation" },
      { img: linkedSlide3, alt: "presentation" },
      { img: linkedSlide4, alt: "presentation" }
    ],
    technos: [
      { name: "REACT NATIVE", percentage: 80 },
      { name: "PHP", percentage: 20 }
    ]
  },
  {
    key: "todoreaction",
    title: "ToDo'Réac'tion",
    description: (
      <>
        ToDo'Réac'tion est une application de gestion de tâches moderne, réalisée avec React Native, Redux Toolkit et Expo Router.
        <ul>
          <li>Ajout, édition et suppression de tâches</li>
          <li>Gestion de la date et de l'heure d'échéance pour chaque tâche</li>
          <li>Catégorisation des tâches : crée tes propres catégories, choisis leur couleur, filtre les tâches par catégorie grâce à des "chips"</li>
          <li>Palette de couleurs : chaque tâche peut avoir une couleur personnalisée parmi 10 proposées</li>
          <li>Thèmes visuels : change le fond de l'application (clair, sombre, bleu, etc.), le choix est persistant</li>
          <li>Interface moderne et responsive : expérience utilisateur fluide sur mobile</li>
        </ul>
      </>
    ),
    slides: [
      { img: todoreaction1, alt: "todoreaction" },
      { img: todoreaction2, alt: "todoreaction" },
      { img: todoreaction3, alt: "todoreaction" },
      { img: todoreaction4, alt: "todoreaction" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ]
  },
  {
    key: "gachanote",
    title: "GachaNote",
    description: (
      <>
        GachaNote est l’outil idéal pour tous les joueurs de jeux gacha qui souhaitent :
        <ul>
          <li>Suivre précisément leurs dépenses et tirages sur chaque jeu.</li>
          <li>Visualiser leur historique et leurs statistiques de façon claire et graphique.</li>
          <li>Prendre conscience de leurs habitudes de consommation sur les gachas.</li>
          <li>Comparer leurs dépenses entre plusieurs jeux et sur différentes périodes.</li>
        </ul>
      </>
    ),
    slides: [
      { img: gachanote1, alt: "gachanote" },
      { img: gachanote2, alt: "gachanote" },
      { img: gachanote3, alt: "gachanote" },
      { img: gachanote4, alt: "gachanote" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "REACT NATIVE", percentage: 30 },
      { name: "TYPESCRIPT", percentage: 20 },
      { name: "REDUX TOOLKIT", percentage: 10 }
    ]
  },
  {
    key: "jiamini",
    title: "Jiamini",
    description: (
      <>
        Jiamini est une application mobile qui facilite l'apprentissage scolaire en Afrique en proposant des cours adaptés (PDF, vidéo, image, jeu).<br />
        Elle propose aussi l'histoire de personnages historiques selon le pays sélectionné.
      </>
    ),
    slides: [
      { img: jiamini1, alt: "jiamini" },
      { img: jiamini2, alt: "jiamini" },
      { img: jiamini3, alt: "jiamini" },
      { img: jiamini4, alt: "jiamini" }
    ],
    technos: [
      { name: "EXPO", percentage: 40 },
      { name: "JAVA (BACK)", percentage: 30 },
      { name: "REACT NATIVE", percentage: 15 },
      { name: "POSTGRESQL", percentage: 15 }
    ]
  },
  {
    key: "eclat",
    title: "Éclat Solidaire",
    description: (
      <>
        Éclat Solidaire est un site qui recense les associations ayant peu de visibilité et les événements disponibles.<br />
        On peut s'inscrire bénévolement à une association et faire des dons si on le souhaite.
      </>
    ),
    slides: [
      { img: eclat1, alt: "eclat" },
      { img: eclat2, alt: "eclat" },
      { img: eclat3, alt: "eclat" },
      { img: eclat4, alt: "eclat" },
      { img: eclat5, alt: "eclat" },
      { img: eclat6, alt: "eclat" },
      { img: eclat7, alt: "eclat" }
    ],
    technos: [
      { name: "REACT", percentage: 50 },
      { name: "NODEJS", percentage: 30 },
      { name: "JAVASCRIPT", percentage: 20 }
    ]
  }
]