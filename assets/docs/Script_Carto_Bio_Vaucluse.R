####################################
#                                  #
# Cartographie sous R : Evaluation #
# décembre 2025                    #
# MONTOIR Nahtan                   #
#                                  #
####################################

##############################
# 1. Préparation des données #
##############################

    # 1. 1. Gestion de l'environnement de travail

# Nettoyage de l'environnement de travail
rm(list = ls())

# Indication du chemin d'accès vers le répertoire de travail
setwd("C:/Users/natha/Desktop/Cours 2025-2026/Dossiers Carto R/Evaluation Carto R/Evaluation")

    # 1. 2. Chargement des librairies

# Attention, les librairies doivent être installées au préalable
library(sf)    # Traitement de l'information géographique
library(mapsf) # Cartographie (dédiée aux objets de type sf)
library(dplyr) # Manipulation d'objets variés

    # 1. 3. Import des données

CLC <- read.csv("clc_etat_com_n1.csv")        # Import du csv Corine Land Cover
SurfBio <- read.csv("AgriBio.csv", sep = ",") # Import du csv des données bio
comVauc <- st_read("CommunesVaucluse.shp")    # Import des communes en shp
Dep <- st_read("DEPT.geojson")                # Import des départements limitrophes en geojson

# Création des limites administratives communales et départementales
plot(comVauc$geometry)
plot(Dep$geometry)

# Définir le SCR des couches
st_crs(comVauc) <- 2154
st_crs(Dep) <- 2154


#############################
# 2. Traitement des données #
#############################

    # 2. 1. Tri et sélection des données de surface bio

# Sélection du code INSEE des communes commençant par "84"
SBio_84 <- grep("^84", SurfBio$Code)

# Les charger dans une nouvelle couche
SBio_Vauc <- SurfBio[SBio_84,]

    # 2. 2. Jointure des données de surface biologique aux communes

# Sélection
SBio_Vauc <- SBio_Vauc %>%
  select(Code, Surface.agricole.engagée.dans.l.agriculture.biologique.2018)

# Jointure
comVauc <- merge(comVauc, SBio_Vauc, by.x = "INSEE_COM", by.y = "Code")

    # 2. 3. Tri des données qui nous seront utiles (surface agricole)

# Sélection du code INSEE des communes commençant par "84"
CLC_Code <- grep("^84", CLC$NUM_COM)

# Les charger dans une nouvelle couche
CLC_Vaucluse <- CLC[CLC_Code,]

# Ne garder seulement l'année 2018
CLC_V_2018 <- filter(CLC_Vaucluse, ANNEE == 2018)

# Chargement des données qui nous intéressent (CLC_2 pour les terres agricoles)
CLC2_V_2018 <- CLC_V_2018%>%
  select(NUM_COM, CLC_2)

    # 2. 4. Jointure des données de surface agricole aux communes

# Sélection des colonnes pour la jointure
comVauc <- comVauc%>%
  select(INSEE_COM, NOM, Surface.agricole.engagée.dans.l.agriculture.biologique.2018, geometry)

# Jointure dans une nouvelle couche
comVaucCLC2 <- merge(comVauc, CLC2_V_2018, by.x = "INSEE_COM", by.y = "NUM_COM")

    # 2. 5. Calcul du pourcentage de terres agricoles biologiques

# Vérification du type de la variable avant le calcul
class(comVaucCLC2$Surface.agricole.engagée.dans.l.agriculture.biologique.2018)
class(comVaucCLC2$CLC_2)

# Transformation de la variable d'agriculture biologique de "character" à "numeric"

comVaucCLC2$Surface.agricole.engagée.dans.l.agriculture.biologique.2018 <- as.numeric(comVaucCLC2$Surface.agricole.engagée.dans.l.agriculture.biologique.2018)

# Calcul et création d'une nouvelle colonne pour la part des terres agricoles biologiques
comVaucCLC2 <- comVaucCLC2 %>%
  mutate(partBio = 100 * Surface.agricole.engagée.dans.l.agriculture.biologique.2018 / CLC_2)


##################################
# 3. Mise en page cartographique #
##################################

# Création d'un thème de carte
mf_theme("default")

# Initialisation de la mise en page
mf_init(x = comVaucCLC2,
        expandBB = c(0.02,0,0,0))  # Choisir la position et le niveau de zoom de la carte

# Départements limitrophes
mf_map(x = Dep,
       pal = "white",              # Couleur de la palette
       border = "#808080",         # Couleur du contour
       add = TRUE)

# Création d'un ombrage
mf_shadow(comVaucCLC2, add = TRUE)

# Ajout de la carte et de sa légende
mf_map(x = comVaucCLC2,
       var = "partBio",                                     # Variable utilisée
       type = "choro",                                      # Choix d'une carte de type choroplèthe
       breaks = "jenks",                                    # Choix du type de rupture
       nbreaks = 6,                                         # Nombre de rupture
       pal = colorRampPalette(c("#f7fcf5", "#006d2c"))(6),  # Choix de la palette de couleur
       border = "#868686",                                  # Contour
       leg_title_cex = 0.6,                                 # Taille du titre
       leg_val_cex = 0.5,                                   # Taille du texte de la légende
       leg_title = "Part d'agriculture\nbiologique (en %)", # Titre de la légende
       leg_pos = "topright",                                # Position de la légende
       leg_val_rnd = 0,                                     # Arrondir les données après la virgule dans la légende
       leg_no_data = "Pas de données",                      # Texte no data
       leg_frame = TRUE,                                    # Fond de la légende
       leg_bg = "#ffffffb2",                                # Couleur du fond de la légende
       leg_frame_border = "#ffffffb2",                      # Couleur du contour de la légende
       leg_box_border = "#868686",                          # Couleur du contour des données de la légende
       add = TRUE)

# Ajout d'une flèche Nord et d'une échelle
mf_arrow(pos = "topleft")
mf_scale(size = 30, pos = "bottomright")

# Ajout d'un titre
mf_title(txt = "Part des terres agricoles biologiques par commune dans le Vaucluse",
         font = 7,     # Police d'écriture
         cex = 0.7)    # Taille de l'écriture

# Ajout de crédits
mf_credits(txt = "Auteur : MONTOIR Nathan\nDate : Décembre 2025\nSource de données : Observatoire des territoires (2018),\nCorine Land Cover (2018), Admin Express (2025)",
           pos = "bottomleft",   # Position des crédits
           cex = 0.5)            # Taille des crédits

################################################################################
