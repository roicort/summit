---
title: Astro pour un web plus sobre
description: Ce qu'Astro et Starlight nous apprennent sur le poids des pages, l'energie des appareils, le cache et les emissions numeriques.
date: 2026-10-15
day: 2
startsAt: '13:00'
endsAt: '13:45'
room: studio
speakers:
  - tomas-alvarez
tags:
  - Web sobre
  - Technologie
  - Action climatique
---

Le web a une empreinte materielle. Les estimations situent l'industrie internet entre 2 % et 4 % des emissions mondiales de carbone, soit un ordre de grandeur comparable a celui du transport aerien. Chaque page sollicite les data centers, les reseaux et les appareils des personnes qui la consultent, et ce travail consomme de l'energie. Les produits numeriques responsables commencent par une question simple : quelle partie de ce travail est vraiment necessaire ?

Astro ouvre une piste utile pour cette conversation. Starlight, le theme de documentation d'Astro, indique que sa premiere visite transfere moins de 50 Ko de donnees compressees. Avec une bonne strategie de cache, les navigations suivantes peuvent transferer environ 10 Ko. C'est une petite fraction des plus de 2 000 Ko necessaires en moyenne pour une page web selon les donnees de HTTP Archive en avril 2023.

Cette architecture aide a atteindre ce resultat. Astro genere du HTML par defaut et n'envoie du JavaScript que la ou une interaction le demande. Son modele Islands permet aux composants interactifs de ne charger aucun JavaScript cote client tant qu'ils ne sont pas explicitement hydrates. C'est important : analyser et compiler du JavaScript peut prendre plus de 30 fois plus de temps que traiter un fichier JPEG de meme taille, ce qui augmente le travail de l'appareil.

Les chiffres sont encourageants, mais ils doivent etre contextualises. Le Website Carbon Calculator a mesure le site Starlight a 0,01 g de CO2 par visite et plus propre que 98 % des pages testees. La comparaison porte sur des sites de documentation similaires, pas sur tous les types de sites, et un framework ne garantit pas ce resultat a lui seul. Images, analytics, videos, hebergement, trafic et strategie de cache modifient tous l'empreinte.

Le travail pratique depend de nous : optimiser les images avec les outils d'assets d'Astro, eviter les animations inutiles, charger les videos a la demande, choisir des analytics legers, definir de longues durees de cache pour les assets immuables et privilegier un hebergement alimente par des energies renouvelables. Pour mesurer le resultat, on peut utiliser le [Website Carbon Calculator](https://www.websitecarbon.com/), [GreenFrame](https://greenframe.io/), [Ecograder](https://ecograder.com/) ou [WebPageTest Carbon Control](https://www.webpagetest.org/carbon-control/).

Chez Summit, Astro illustre un principe plus large : un web plus sobre se construit avec de bons choix par defaut et de nombreuses decisions modestes, repetees sur chaque page et a chaque mise en ligne. Astro ne resout pas seul les emissions numeriques, mais il rend une base plus legere accessible au quotidien.

Lire le [guide complet de Starlight sur l'impact environnemental](https://starlight.astro.build/environmental-impact/).
