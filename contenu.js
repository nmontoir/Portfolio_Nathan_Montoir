window.PORTFOLIO = {
  "reglages": {
    "liens_documents": true
  },
  "profil": {
    "nom": "Nathan Montoir",
    "metier": "Géomaticien",
    "accroche": "Étudiant en master Géomatique à Montpellier, je me forme au traitement et à l'analyse de données géographiques, ainsi qu'à la conception de cartes et d'outils d'aide à la décision.",
    "image_accueil": "vil-salles",
    "legende_accueil": "Les Salles-sur-Verdon en 1960, avant la mise en eau du lac de Sainte-Croix. Projet personnel.",
    "a_propos": "Je m'intéresse à l’analyse et à la représentation des territoires à travers les données géographiques. J’apprécie particulièrement la cartographie, l’exploration des paysages et la compréhension des dynamiques territoriales.\n\nMa passion pour l'art m’a apporté l’intérêt des détails et me permet d’être minutieux dans la réalisation cartographique.",
    "recherche": "Recherche un stage de 6 mois à partir de février 2027",
    "contact": [
      {
        "libelle": "E-mail",
        "valeur": "nath.montoir@gmail.com",
        "url": ""
      },
      {
        "libelle": "LinkedIn",
        "valeur": "www.linkedin.com/in/nathan-montoir-2160a4322",
        "url": ""
      },
      {
        "libelle": "Localisation",
        "valeur": "Mobilité géographique",
        "url": ""
      }
    ]
  },
  "competences": [
    {
      "titre": "SIG et cartographie",
      "liste": "QGIS, ArcGIS Pro, ArcGIS Online (StoryMaps, Dashboards, Experience Builder), Inkscape"
    },
    {
      "titre": "Programmation",
      "liste": "R, Python, SQL, Bash"
    },
    {
      "titre": "Télédétection",
      "liste": "Traitement de photographies aériennes anciennes (Orfeo ToolBox, GDAL), géoréférencement"
    },
    {
      "titre": "Méthodes",
      "liste": "Analyse spatiale et diachronique, photo-interprétation, accessibilité (GTFS, OpenTripPlanner), sémiologie graphique"
    },
    {
      "titre": "Langues",
      "liste": "Français (langue maternelle), anglais (B2, opérationnel)"
    }
  ],
  "parcours": [
    {
      "periode": "2025 – 2027",
      "titre": "Master Géomatique",
      "detail": "Université Paul-Valéry Montpellier 3, Université de Montpellier, AgroParisTech"
    },
    {
      "periode": "Juillet – septembre 2026",
      "titre": "Stagiaire en géomatique, UMR SENS (IRD)",
      "detail": "Cartographie de l'évolution de l'arboriculture à Rufisque (Sénégal)"
    },
    {
      "periode": "Nov. 2024 – juin 2025",
      "titre": "Volontaire en service civique, Compagnons Bâtisseurs",
      "detail": "Sensibilisation à la précarité énergétique"
    },
    {
      "periode": "2021 – 2024",
      "titre": "Licence de géographie et aménagement du territoire",
      "detail": "Université Paul-Valéry Montpellier 3"
    },
    {
      "periode": "2020 – 2021",
      "titre": "École supérieure des beaux-arts",
      "detail": "MO.CO. Esba, Montpellier"
    },
    {
      "periode": "2020",
      "titre": "Baccalauréat littéraire, option arts",
      "detail": "Lycée Charles-Gide, Uzès"
    }
  ],
  "volets": [
    {
      "nom": "Télédétection",
      "couleur": "#6E7B85"
    },
    {
      "nom": "Projet personnel",
      "couleur": "#B8402F"
    },
    {
      "nom": "Programmation",
      "couleur": "#3A76A6"
    },
    {
      "nom": "Analyse spatiale",
      "couleur": "#C17A28"
    },
    {
      "nom": "Cartographie",
      "couleur": "#4C8658"
    },
    {
      "nom": "Géoweb",
      "couleur": "#85599E"
    }
  ],
  "projets": [
    {
      "id": "rufisque",
      "titre": "Quarante ans de vergers face à la ville",
      "lieu": "Rufisque, Sénégal",
      "resume": "Restaurer des photographies aériennes de 1980 puis mesurer, date après date, le recul des vergers devant l'expansion de Dakar.",
      "volet": "Télédétection",
      "date": "2026",
      "cadre": "Projet tuteuré de master 1 (groupe de trois), puis stage individuel à l'UMR SENS (IRD/Cirad), projet ANR Metroland",
      "role": "Géoréférencement, suppression des rayures, classification, photo-interprétation, toute la chaîne",
      "outils": "ArcGIS Pro, QGIS, Orfeo ToolBox, GDAL",
      "sources": "Photographies aériennes de l'ANAT (1980 à 1999), images Google Earth (2003, 2011, 2021)",
      "couverture": "ruf-z1",
      "chiffres": [
        {
          "valeur": "116 km²",
          "legende": "photo-interprétés sur quatre zones"
        },
        {
          "valeur": "1,2 % → 50,8 %",
          "legende": "part du bâti entre 1980 et 2021"
        },
        {
          "valeur": "88,5 %",
          "legende": "des vergers disparus autour de Niakoulrab entre 2011 et 2021 ont laissé place à du bâti"
        }
      ],
      "blocs": [
        {
          "type": "texte",
          "titre": "Le contexte",
          "texte": "Le département de Rufisque, en périphérie de Dakar, est un territoire d'arboriculture soumis depuis les années 2000 à une forte pression foncière. Le projet de recherche ANR Metroland, porté par l'UMR SENS, étudie l'expansion urbaine de plusieurs métropoles africaines. La commande : cartographier l'évolution des vergers depuis 1980 à partir de photographies aériennes anciennes et d'images satellites récentes."
        },
        {
          "type": "texte",
          "titre": "Des images très abîmées",
          "texte": "Les photographies de 1980, 1992 et 1997 sont bruitées, rayées par leur stockage et de luminosité inégale. Celles de 1999 n'étaient pas géoréférencées. Avant toute analyse, il fallait donc les remettre en état."
        },
        {
          "type": "avant-apres",
          "avant": "ruf-avant",
          "apres": "ruf-apres",
          "legende": "Extrait d'une photographie aérienne ancienne, avant et après suppression des rayures."
        },
        {
          "type": "texte",
          "titre": "Ma méthode pour supprimer les rayures",
          "texte": "Dans le groupe, j'ai géoréférencé les tuiles de 1999 et mis au point la suppression des rayures sur les trois séries les plus anciennes. Les méthodes publiées visent des rayures régulières ; les nôtres étaient courbes et fragmentées. J'ai donc assemblé une chaîne en plusieurs logiciels.\n\nUn filtre de Sobel détecte les contours. Un seuillage isole les rayures dans un masque, nettoyé par un filtre majoritaire puis élargi par des statistiques focales. Les pixels masqués sont enfin supprimés et recalculés à partir de leurs voisins avec l'outil Fill NoData de GDAL."
        },
        {
          "type": "galerie",
          "colonnes": 4,
          "images": [
            {
              "img": "ruf-e1",
              "legende": "1. Détection des contours (filtre de Sobel)"
            },
            {
              "img": "ruf-e3",
              "legende": "2. Différence avec l'image lissée"
            },
            {
              "img": "ruf-e5",
              "legende": "3. Masque des rayures, nettoyé et élargi"
            },
            {
              "img": "ruf-e6",
              "legende": "4. Pixels masqués, prêts à être recalculés"
            }
          ]
        },
        {
          "type": "image",
          "img": "ruf-methode",
          "taille": "moyenne",
          "legende": "La chaîne de traitement complète. Deux variantes selon la série de photographies, puis un tronc commun."
        },
        {
          "type": "texte",
          "titre": "Une classification abandonnée, et pourquoi",
          "texte": "Nous avons ensuite tenté une classification supervisée à partir de textures de Haralick calculées dans Orfeo ToolBox. Avec 36 % de validation, loin des 80 % habituellement attendus, elle n'était pas exploitable. Nous avons choisi la photo-interprétation manuelle, plus lente mais fiable."
        },
        {
          "type": "texte",
          "titre": "Le stage : mesurer les changements",
          "texte": "Pendant le stage, j'ai repris seul la cartographie sur quatre zones redéfinies. J'ai simplifié la typologie (vergers denses ou peu denses, bâti dense ou peu dense, terrain nu, industrie) et vectorisé l'emprise réelle des plantations plutôt que les parcelles.\n\nPour chaque période, une différence symétrique entre deux dates isole les vergers apparus et disparus. Une sélection par localisation distingue ensuite ceux qui ont été remplacés par du bâti."
        },
        {
          "type": "videos",
          "legende": "Évolution de l'occupation du sol dans les quatre zones. En vert vif les vergers apparus, en rouge foncé, ceux remplacés par du bâti et, en rouge, ceux disparus pour des raisons inconnues.",
          "videos": [
            {
              "src": "rufisque-zone1",
              "titre": "Zone 1 · Niakoulrab"
            },
            {
              "src": "rufisque-zone2",
              "titre": "Zone 2 · Sangalkam et Bambilor"
            },
            {
              "src": "rufisque-zone3",
              "titre": "Zone 3 · Sébikotane"
            },
            {
              "src": "rufisque-zone4",
              "titre": "Zone 4 · Deni Malick Gueye et Diamniadio"
            }
          ]
        },
        {
          "type": "texte",
          "titre": "Les résultats",
          "texte": "Sur l'ensemble des quatre zones, le bâti passe de 1,2 % de la surface en 1980 à 50,8 % en 2021, pour l'essentiel après 2011. Les vergers culminent en 2011 (25,3 %) puis reculent (18,2 % en 2021).\n\nAutour de Niakoulrab, 88,5 % des vergers disparus entre 2011 et 2021 ont laissé place à du bâti. À Sébikotane, cette part tombe à environ 36 % : d'autres causes jouent, comme l'abandon des plantations."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "ruf-z1",
              "legende": "Zone 1, cinq dates de 1980 à 2021"
            },
            {
              "img": "ruf-z3",
              "legende": "Zone 3, Sébikotane"
            },
            {
              "img": "ruf-z4",
              "legende": "Zone 4, Diamniadio"
            },
            {
              "img": "ruf-z2",
              "legende": "Zone 2, Sangalkam et Bambilor"
            }
          ]
        },
        {
          "type": "texte",
          "titre": "",
          "texte": ""
        }
      ]
    },
    {
      "id": "villages-engloutis",
      "titre": "Villages engloutis",
      "lieu": "Var, Lozère, Hautes-Alpes",
      "resume": "Redessiner, d'après les archives, le plan de villages disparus sous des lacs de barrage.",
      "volet": "Projet personnel",
      "date": "Depuis novembre 2025",
      "cadre": "Projet personnel, série en cours",
      "role": "Recherche documentaire, vectorisation, dessin",
      "outils": "ArcGIS Pro, Inkscape",
      "sources": "IGN (photographies aériennes anciennes, SCAN 50, carte de l'État-Major), archives départementales, association Mémoire des Salles-sur-Verdon",
      "couverture": "vil-bayard",
      "chiffres": [
        {
          "valeur": "3 villages",
          "legende": "cartographiés, un quatrième en cours"
        },
        {
          "valeur": "1957 – 1963",
          "legende": "états représentés, quelques années avant la mise en eau"
        }
      ],
      "blocs": [
        {
          "type": "texte",
          "titre": "L'idée",
          "texte": "Au XXe siècle, la construction de grands barrages a noyé plusieurs villages français. Cette série, menée sur mon temps libre, redessine chacun d'eux tel qu'il était peu avant sa disparition : rues, bâti, parcelles, vergers, canaux."
        },
        {
          "type": "image",
          "img": "vil-salles",
          "legende": "Les Salles-sur-Verdon (Var) en 1960. Le village a été englouti en 1974 par le lac de Sainte-Croix."
        },
        {
          "type": "texte",
          "titre": "La méthode",
          "texte": "Je vectorise le village dans ArcGIS Pro à partir de photographies aériennes anciennes et de cartes d'époque, complétées par des archives locales pour les noms de rues et les bâtiments. Le dessin final et la mise en page se font dans Inkscape.\n\nLes cartes partagent le même gabarit : carroyage en mètres, cartouche de titre, blason de la commune et repères numérotés pour les bâtiments principaux."
        },
        {
          "type": "image",
          "img": "vil-naussac",
          "legende": "Naussac (Lozère) en 1963, avec en cartons les hameaux de Réals et de La Ponteyre. Englouti en 1983 par le lac de Naussac."
        },
        {
          "type": "image",
          "img": "vil-bayard",
          "legende": "Bayard (Lozère) en 1957. Englouti en 1964 par le lac de Villefort."
        },
        {
          "type": "texte",
          "titre": "La suite",
          "texte": "La prochaine carte est en cours : Savines (Hautes-Alpes), disparu en 1960 sous le lac de Serre-Ponçon."
        }
      ]
    },
    {
      "id": "campus-illkirch",
      "titre": "L'accessibilité d'un campus en métropole",
      "lieu": "Eurométropole de Strasbourg",
      "resume": "Simuler, commune par commune, le temps d'accès à un campus en transports en commun et à vélo.",
      "volet": "Programmation",
      "date": "Avril 2026",
      "cadre": "Master 1, travail individuel",
      "role": "Toute la chaîne",
      "outils": "R (sf, opentripplanner, mapsf, leaflet, ggplot2), OpenTripPlanner, Quarto",
      "sources": "OpenStreetMap, horaires GTFS de la CTS, IGN, Insee",
      "couverture": "stras-carte",
      "chiffres": [
        {
          "valeur": "33 communes",
          "legende": "simulées, départ toutes les minutes de 6 h à 9 h"
        },
        {
          "valeur": "15 → 63 min",
          "legende": "de la commune la plus proche à la plus éloignée"
        },
        {
          "valeur": "26 / 28 min",
          "legende": "vélo et tramway depuis le centre de Strasbourg"
        }
      ],
      "blocs": [
        {
          "type": "texte",
          "titre": "La question",
          "texte": "Le campus d'Illkirch (IUT Robert Schuman) se trouve au sud de l'Eurométropole de Strasbourg. L'accès en transports en commun, à vélo ou à pied est-il équitable pour les habitants des 33 communes ?"
        },
        {
          "type": "texte",
          "titre": "La méthode",
          "texte": "J'ai monté un serveur OpenTripPlanner local, alimenté par OpenStreetMap et les horaires de la CTS, et je l'ai piloté depuis R. Pour chaque mairie, le script simule tous les départs possibles entre 6 h et 9 h, minute par minute, puis calcule la durée moyenne du trajet et le nombre de trajets distincts.\n\nDes isochrones de 5 à 30 minutes comparent ensuite le vélo et les transports en commun depuis le campus. L'ensemble forme un rapport Quarto reproductible : texte, code, cartes et graphiques sont générés d'un seul bloc."
        },
        {
          "type": "image",
          "img": "stras-carte",
          "legende": "Durée moyenne du trajet (couleur des cercles) et nombre de trajets distincts (taille) depuis chaque commune, sur fond de densité de population."
        },
        {
          "type": "texte",
          "titre": "Les résultats",
          "texte": "Le trajet prend 15 minutes depuis Illkirch-Graffenstaden et 63 minutes depuis Eckwersheim. Sur une semaine de cours, cela représente 8 heures de transport en plus. La majorité des communes sont à plus de 50 minutes en moyenne.\n\nDepuis le centre de Strasbourg, le vélo fait jeu égal avec le tramway, et son isochrone de 30 minutes couvre un territoire plus étendu et plus continu."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "stras-histo",
              "legende": "Répartition des 33 communes selon la durée moyenne du trajet"
            },
            {
              "img": "stras-nuage",
              "legende": "Durée du trajet en fonction de la distance au campus"
            }
          ]
        }
      ]
    },
    {
      "id": "librairie-terre-de-provence",
      "titre": "Où ouvrir une seconde librairie ?",
      "lieu": "Terre de Provence, Bouches-du-Rhône",
      "resume": "Comparer douze communes candidates pour trouver celle qui améliore le plus l'accès de tous à un équipement.",
      "volet": "Analyse spatiale",
      "date": "2026",
      "cadre": "Master 1, cours d'analyse spatiale, travail individuel",
      "role": "Toute la chaîne",
      "outils": "QGIS, tableur",
      "sources": "ViaMichelin, Admin Express (IGN)",
      "couverture": "lib-resultat",
      "chiffres": [
        {
          "valeur": "12 communes",
          "legende": "candidates comparées"
        },
        {
          "valeur": "34 → 11 min",
          "legende": "temps d'accès de la commune la plus éloignée"
        },
        {
          "valeur": "46,6 % → 83,3 %",
          "legende": "des habitants à moins de 10 minutes"
        }
      ],
      "blocs": [
        {
          "type": "texte",
          "titre": "La question",
          "texte": "Scénario du cours : la communauté d'agglomération Terre de Provence (13 communes, 266 km²) veut ouvrir une librairie associative. Il en existe déjà une à Graveson, à l'ouest. Où placer la seconde ?"
        },
        {
          "type": "image",
          "img": "lib-reseau",
          "taille": "moyenne",
          "legende": "Le réseau routier simplifié en graphe, avec les temps de parcours entre mairies."
        },
        {
          "type": "texte",
          "titre": "La méthode",
          "texte": "À partir de la matrice des plus courts chemins, j'ai calculé pour chaque commune candidate deux indicateurs qui tirent dans des sens opposés. L'équité : le temps d'accès de la commune la plus mal desservie. L'efficacité : le gain de temps total, pondéré par la population.\n\nDes courbes de population desservie en fonction du temps complètent la comparaison."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "lib-nuage",
              "legende": "Les communes selon leur population et leur éloignement de Graveson"
            },
            {
              "img": "lib-courbe",
              "legende": "Part de la population desservie selon le temps d'accès, pour trois scénarios"
            }
          ]
        },
        {
          "type": "texte",
          "titre": "La recommandation",
          "texte": "Saint-Andiol est la localisation la plus équilibrée. Le temps d'accès maximal tombe de 34 à 11 minutes, et la part des habitants à moins de 10 minutes d'une librairie passe de 46,6 % à 83,3 %.\n\nVerquières fait à peine mieux sur l'efficacité mais perd 3 minutes sur l'équité. Châteaurenard, la commune la plus peuplée, est écartée : déjà à 10 minutes de Graveson, elle gagnerait peu."
        },
        {
          "type": "image",
          "img": "lib-resultat",
          "legende": "Gain de temps d'accès par commune après une implantation à Saint-Andiol."
        }
      ]
    },
    {
      "id": "airbnb-pays-basque",
      "titre": "Airbnb au Pays basque : tout se joue sur la côte",
      "lieu": "Communauté d'agglomération du Pays basque",
      "resume": "Quatre méthodes statistiques pour décrire la concentration des locations touristiques.",
      "volet": "Analyse spatiale",
      "date": "2026",
      "cadre": "Master 1, cours d'analyse spatiale, travail individuel",
      "role": "Toute la chaîne",
      "outils": "QGIS, GeoDa",
      "sources": "Inside Airbnb (2025), BD CARTO (IGN), Corine Land Cover",
      "couverture": "airbnb-hex",
      "chiffres": [
        {
          "valeur": "11 839",
          "legende": "logements analysés dans 158 communes"
        },
        {
          "valeur": "0,25",
          "legende": "indice du plus proche voisin : un semis très agrégé"
        },
        {
          "valeur": "0,406",
          "legende": "I de Moran : autocorrélation spatiale positive"
        }
      ],
      "blocs": [
        {
          "type": "texte",
          "titre": "La question",
          "texte": "La répartition des logements Airbnb dans l'agglomération du Pays basque reflète-t-elle les dynamiques touristiques du territoire ?"
        },
        {
          "type": "image",
          "img": "airbnb-loc",
          "legende": "Les logements, leur point moyen, leur point médian et le cercle de distance-type."
        },
        {
          "type": "texte",
          "titre": "La méthode",
          "texte": "Quatre approches se complètent : des indicateurs de centralité et de dispersion (point moyen, point médian, distance-type), l'indice du plus proche voisin, un comptage dans des mailles hexagonales de 4 km, puis l'autocorrélation spatiale avec l'I de Moran et la carte des clusters dans GeoDa."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "airbnb-hex",
              "legende": "Nombre de logements par maille hexagonale de 4 km"
            },
            {
              "img": "airbnb-clusters",
              "legende": "Clusters de communes : en rouge les fortes valeurs voisines, en bleu les faibles"
            }
          ]
        },
        {
          "type": "texte",
          "titre": "Les résultats",
          "texte": "Tout converge. L'indice du plus proche voisin décrit un semis très agrégé. Le maillage fait ressortir Biarritz, Bayonne, Saint-Jean-de-Luz et Hendaye. L'I de Moran confirme des groupes de communes très dotées sur la côte et peu dotées dans l'intérieur.\n\nDeux limites : les résultats dépendent de la taille des mailles et de la définition du voisinage, et l'analyse ne porte que sur une date."
        }
      ]
    },
    {
      "id": "dossier-vaucluse",
      "titre": "Le Vaucluse en quatre cartes",
      "lieu": "Vaucluse",
      "resume": "Un dossier qui raconte un département, de la carte de présentation à la carte de synthèse.",
      "volet": "Cartographie",
      "date": "Octobre 2025",
      "cadre": "Master 1, cours de cartographie et géovisualisation, travail individuel",
      "role": "Toute la chaîne",
      "outils": "QGIS, Inkscape",
      "sources": "IGN (BD CARTO, BD TOPO, ROUTE 500, RPG), Insee, Corine Land Cover, Copernicus GLO-30",
      "couverture": "vaucluse-synth",
      "chiffres": [],
      "blocs": [
        {
          "type": "texte",
          "titre": "La démarche",
          "texte": "Le dossier avance en quatre temps. Une carte de présentation pose le décor : occupation du sol, relief, axes et sites remarquables. Deux cartes thématiques creusent la population et l'agriculture biologique. Une carte de synthèse schématise enfin l'organisation du territoire."
        },
        {
          "type": "image",
          "img": "vaucluse-synth",
          "legende": "Carte de synthèse. L'urbanisation suit les axes de la vallée du Rhône ; l'agriculture de plaine recule ; l'arrière-pays, couvert par deux parcs naturels régionaux, reste plus préservé."
        },
        {
          "type": "texte",
          "titre": "Les choix de représentation",
          "texte": "Chaque carte utilise le mode de représentation adapté à sa donnée. La densité de population est en aplats, avec un carton sur le Grand Avignon pour l'évolution entre 1990 et 2022. La carte agricole superpose des aplats pour une part (la couverture agricole) et des cercles proportionnels pour une quantité (les hectares en bio). La synthèse abandonne les contours réels pour des formes simplifiées, des flèches et des trames."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "vaucluse-pres",
              "legende": "Carte de présentation : occupation du sol, relief et sites remarquables"
            },
            {
              "img": "vaucluse-pop",
              "legende": "Densité de population et évolution du Grand Avignon"
            },
            {
              "img": "vaucluse-agri",
              "legende": "Couverture agricole et surfaces en agriculture biologique"
            }
          ]
        }
      ]
    },
    {
      "id": "serie-atlas",
      "titre": "Série de cartes",
      "lieu": "Espagne, Pays-Bas, Roumanie",
      "resume": "Une série de cartes nationales dans le style des atlas classiques.",
      "volet": "Cartographie",
      "date": "Décembre 2025",
      "cadre": "Master 1, cours de cartographie et géovisualisation, travail individuel",
      "role": "Toute la chaîne",
      "outils": "QGIS, Inkscape",
      "sources": "[à compléter]",
      "couverture": "espagne",
      "chiffres": [],
      "blocs": [
        {
          "type": "texte",
          "titre": "L'exercice",
          "texte": "Concevoir une série de cartes homogène, légendée en espagnol, et la décliner sur trois pays de taille et de forme très différentes."
        },
        {
          "type": "image",
          "img": "espagne",
          "legende": "Espagne. Carroyage tous les 200 km."
        },
        {
          "type": "texte",
          "titre": "Le gabarit",
          "texte": "Les trois cartes reprennent la même mise en page : cadre à damier gradué en kilomètres, carton de situation en Europe, relief en teintes vertes, écritures espacées et courbées pour les régions et les massifs, italiques bleues pour les mers, armoiries et cartouche de légende.\n\nLa difficulté est de tenir ce gabarit d'un pays à l'autre. Le pas du carroyage change, et le format passe du paysage au portrait pour les Pays-Bas. Les données, le relief et la projection sont préparés dans QGIS ; la typographie et l'habillage sont réalisés dans Inkscape."
        },
        {
          "type": "galerie",
          "colonnes": 2,
          "images": [
            {
              "img": "roumanie",
              "legende": "Roumanie. Carroyage tous les 120 km."
            },
            {
              "img": "paysbas",
              "legende": "Pays-Bas. Carroyage tous les 60 km."
            }
          ]
        }
      ]
    },
    {
      "id": "trois-echelles",
      "titre": "Un département, une ville, un campus",
      "lieu": "Hérault",
      "resume": "Trois exercices de sémiologie à trois échelles, pour trois usages.",
      "volet": "Cartographie",
      "date": "Septembre 2025",
      "cadre": "Master 1, cours de cartographie et géovisualisation, travail individuel",
      "role": "Toute la chaîne",
      "outils": "QGIS, Inkscape",
      "sources": "IGN (BD CARTO, BD TOPO, ROUTE 500), Corine Land Cover, OpenStreetMap",
      "couverture": "herault",
      "chiffres": [],
      "blocs": [
        {
          "type": "texte",
          "titre": "Le département : une carte de synthèse",
          "texte": "L'occupation du sol Corine Land Cover est posée sur un estompage du relief. S'y ajoutent le réseau de transport, les sommets, les sites naturels et culturels remarquables et le périmètre du parc naturel régional du Haut-Languedoc."
        },
        {
          "type": "image",
          "img": "herault",
          "legende": "Territoires et sites remarquables de l'Hérault."
        },
        {
          "type": "texte",
          "titre": "La ville : dans le style d'une carte topographique",
          "texte": "L'exercice consistait à reproduire la sémiologie d'une carte topographique à grande échelle à partir de la BD TOPO : bâti, réseau routier hiérarchisé, équipements en pictogrammes, noms des étangs et de la mer en écriture espacée."
        },
        {
          "type": "image",
          "img": "palavas",
          "legende": "Palavas-les-Flots."
        },
        {
          "type": "texte",
          "titre": "Le campus : un plan pour s'orienter",
          "texte": "Un plan d'accès pensé pour l'usager : les itinéraires piétons partent de chaque entrée du campus et des arrêts de tramway pour rejoindre une salle. Le fond reste neutre, une seule couleur vive porte le trajet."
        },
        {
          "type": "image",
          "img": "bn6",
          "taille": "moyenne",
          "legende": "Plan d'accès à la salle BN6, université Paul-Valéry."
        }
      ]
    },
    {
      "id": "les-saintes",
      "titre": "Les Saintes : une carte et son mode d'emploi",
      "lieu": "Guadeloupe",
      "resume": "Reproduire le style d'une carte IGN dans ArcGIS Pro, puis expliquer pas à pas comment faire.",
      "volet": "Cartographie",
      "date": "Octobre 2025",
      "cadre": "Master 1, cours de SIG, travail individuel",
      "role": "Carte et rédaction du tutoriel",
      "outils": "ArcGIS Pro",
      "sources": "IGN (BD ALTI, BD TOPO), SHOM, SRTM, Copernicus, GEBCO",
      "couverture": "saintes",
      "document": {
        "texte": "Télécharger le tutoriel (PDF, 18 pages)",
        "fichier": "assets/docs/Tutoriel_ArcGIS_Pro_Les_Saintes.pdf"
      },
      "chiffres": [],
      "blocs": [
        {
          "type": "image",
          "img": "saintes",
          "legende": "Carte topographique des Saintes."
        },
        {
          "type": "texte",
          "titre": "La carte",
          "texte": "Elle reprend les codes de la carte topographique IGN à partir de données libres : estompage et courbes de niveau calculés depuis le modèle numérique de terrain, bathymétrie, vectorisation des éléments manquants, étiquetage et carton de situation."
        },
        {
          "type": "texte",
          "titre": "Le tutoriel",
          "texte": "Le document de 18 pages qui l'accompagne détaille chaque étape pour un débutant : organisation du projet, symbologie, création et édition de couches, géotraitements raster (comblement, ombrage, extraction, isolignes), étiquettes, mise en page et export."
        }
      ]
    },
    {
      "id": "risque-inondation",
      "titre": "Gérer le risque inondation en Méditerranée",
      "lieu": "Arc méditerranéen français",
      "resume": "Un récit cartographique en ligne sur la mémoire et la prévention des crues.",
      "volet": "Géoweb",
      "date": "Décembre 2025",
      "cadre": "Master 1, cours de SIG, travail en binôme",
      "role": "Conception, cartes et rédaction à deux",
      "outils": "ArcGIS Online (StoryMaps, Dashboards, Experience Builder)",
      "sources": "IGN (ROUTE 500, BD TOPO, BD CARTO), Géoportail, données des TRI",
      "couverture": "",
      "lien": {
        "texte": "Ouvrir la story map",
        "url": "https://storymaps.arcgis.com/stories/15e13993a8bd4686bb64f85d9f237597"
      },
      "chiffres": [],
      "blocs": [
        {
          "type": "texte",
          "titre": "Le récit",
          "texte": "Cette story map explique pourquoi le pourtour méditerranéen français est si exposé aux crues rapides. Elle revient sur la catastrophe de Vaison-la-Romaine, le 22 septembre 1992, présente les territoires à risque important d'inondation (TRI) et insiste sur la culture du risque."
        },
        {
          "type": "texte",
          "titre": "Les briques techniques",
          "texte": "Le récit assemble plusieurs outils d'ArcGIS Online : un comparateur de photographies aériennes (années 1950 et 2021) sur l'urbanisation des collines de Nîmes, une vidéo d'archive, un tableau de bord sur le TRI du delta du Rhône qui compte les bâtiments exposés, et une application Experience Builder."
        }
      ]
    },
    {
      "id": "carte-sous-r",
      "titre": "Une carte produite par un script",
      "lieu": "Vaucluse",
      "resume": "L'agriculture biologique par commune, de l'import des données à la mise en page, entièrement dans R.",
      "volet": "Programmation",
      "date": "Décembre 2025",
      "cadre": "Master 1, cours de cartographie sous R, travail individuel",
      "role": "Toute la chaîne",
      "outils": "R (sf, mapsf, dplyr)",
      "sources": "Observatoire des territoires (2018), Corine Land Cover (2018), Admin Express (2025)",
      "couverture": "r-bio",
      "chiffres": [],
      "blocs": [
        {
          "type": "image",
          "img": "r-bio",
          "taille": "moyenne",
          "legende": "Part des terres agricoles en agriculture biologique par commune."
        },
        {
          "type": "texte",
          "titre": "Le script",
          "texte": "Il importe les surfaces en agriculture biologique et les surfaces agricoles, les joint aux communes, calcule la part de terres en bio puis met la carte en page avec mapsf : discrétisation de Jenks en six classes, ombrage, légende, échelle et crédits."
        },
        {
          "type": "code",
          "titre": "Extrait : la carte choroplèthe",
          "code": "mf_map(x = comVaucCLC2,\n       var = \"partBio\",\n       type = \"choro\",\n       breaks = \"jenks\",\n       nbreaks = 6,\n       pal = colorRampPalette(c(\"#f7fcf5\", \"#006d2c\"))(6),\n       leg_title = \"Part d'agriculture\\nbiologique (en %)\",\n       leg_no_data = \"Pas de données\",\n       add = TRUE)"
        },
        {
          "type": "texte",
          "titre": "",
          "texte": ""
        }
      ]
    }
  ]
};
