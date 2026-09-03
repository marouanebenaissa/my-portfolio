# Marouane Benaissa — Portfolio (Graphic / Visual Designer)

Portfolio one-page premium, minimaliste et éditorial pour Marouane Benaissa,
Graphic Designer / Visual Designer basé à Marrakech, Maroc. Spécialisé en
Poster Design, Event Visuals, Social Media Design, Photographie et Video
Editing.

## 🎯 Objectif du projet
Présenter le travail de Marouane comme une véritable studio de création
(direction artistique premium, grille suisse, typographie forte, palette
noir / crème / doré) plutôt qu'une simple galerie d'images — utilisable pour
des clients pro, agences, associations et partenaires d'événements.

## ✅ Fonctionnalités actuellement en place

- **Cover / Hero** : nom, rôle, tagline « Turning ideas into visual
  experiences », visuel portrait plein écran avec overlay cinématique.
- **Header sticky** avec navigation ancre (desktop) + menu hamburger
  plein écran off-canvas (mobile), fond qui se solidifie au scroll.
- **Profil (About)** : texte de présentation basé sur le CV fourni
  (Morocco88 / 88 International, leadership, communication, design).
- **Compétences** : grille de 9 compétences avec icônes + liste logiciels
  (Photoshop, Canva, Premiere Pro, Office, Google Workspace).
- **Projets sélectionnés** : 2 études de cas structurées (Brief, Rôle,
  Concept créatif, Processus, Outils, Résultat) — textes et visuels
  encore à remplacer (`.editable` / `.placeholder-box`).
- **Poster Design** : galerie 4 emplacements grand format.
- **Event & Social Media Design** : 6 emplacements (post, story, annonce,
  campagne, reel cover, pub digitale).
- **Branding & Identité visuelle** : 4 emplacements (logo, typo, palette,
  mockup).
- **Photographie** : galerie éditoriale (4 emplacements, mise en page
  asymétrique).
- **Vidéo / Motion** : 2 cartes vidéo avec QR code généré dynamiquement
  (à remplacer par les vrais liens).
- **Processus créatif** : frise BRIEF → RECHERCHE → MOODBOARD → CONCEPT →
  DESIGN → RÉSULTAT.
- **Expérience & Collaborations** : timeline avec l'expérience Morocco88
  tirée du CV + emplacement pour futures collaborations.
- **Contact** : page finale minimaliste « LET'S CREATE SOMETHING GREAT »,
  email, téléphone, LinkedIn, Instagram (placeholder), QR code LinkedIn.
- Animations de révélation au scroll, retour en haut, responsive complet
  (desktop / tablette / mobile testé).

## 🖼️ Images utilisées
- `images/logo-mr1.png` — logo "mr1" fourni par l'utilisateur (favicon +
  marque dans le header/footer).
- `images/marouane-portrait.jpg` — portrait fourni par l'utilisateur,
  utilisé en hero et dans la section Profil.
- Toutes les autres zones visuelles (projets, affiches, réseaux sociaux,
  branding, photographie, vidéo) sont des **placeholders** clairement
  identifiés (bordure pointillée + icône "+" + libellé) prêts à recevoir
  les visuels définitifs de Marouane.

## 🔗 Structure du site (une seule page, ancres)
- `/index.html#cover` — Cover
- `/index.html#about` — Profil
- `/index.html#skills` — Compétences
- `/index.html#projects` — Projets sélectionnés
- `/index.html#posters` — Poster Design
- `/index.html#social` — Event & Social Media Design
- `/index.html#branding` — Branding & Identité visuelle
- `/index.html#photography` — Photographie
- `/index.html#video` — Vidéo / Motion
- `/index.html#process` — Processus créatif
- `/index.html#experience` — Expérience & Collaborations
- `/index.html#contact` — Contact

## 🗂️ Structure des fichiers
```
index.html
css/style.css
js/main.js
images/logo-mr1.png
images/marouane-portrait.jpg
```

## ⚠️ Non implémenté / à compléter
- Les vrais visuels des projets, affiches, posts sociaux, branding,
  photos et vidéos (actuellement en placeholders "+").
- Les textes détaillés de chaque étude de cas (brief, concept, process,
  résultat) — actuellement des textes génériques éditables.
- Le lien Instagram réel (actuellement un lien factice `#`).
- Les liens réels des vidéos derrière les QR codes (actuellement des
  URLs d'exemple `example.com`).
- Aucune base de données / API n'est utilisée : site 100% statique,
  aucune fonctionnalité serveur nécessaire pour ce portfolio.

## 🚀 Prochaines étapes recommandées
1. Envoyer les visuels définitifs (affiches, posts, stories, logos,
   mockups, photos, miniatures vidéo) pour remplacer les placeholders.
2. Rédiger le contenu final de chaque étude de cas (2 à 4 projets
   supplémentaires recommandés).
3. Remplacer le lien Instagram et les liens vidéo par les vraies URLs.
4. Une fois le contenu final prêt, utiliser l'onglet **Publish** pour
   mettre le site en ligne.

## 🎨 Direction visuelle
- Typographie : **Playfair Display** (titres, serif éditorial) +
  **Inter** (texte, sans-serif).
- Palette : blanc cassé `#F7F4EF`, crème `#F0EAE0`, noir encre `#161513`,
  doré `#B8965A`.
- Grille suisse, grand espace blanc, hiérarchie typographique forte,
  éléments décoratifs minimaux.

## 💾 Données / stockage
Aucun stockage de données requis — site statique sans backend ni table.
