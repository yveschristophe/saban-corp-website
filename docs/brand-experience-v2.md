# SABAN CORP — Brand experience V2

Base : `feat/figma-integration`, commit `962e96a` (V1.4). Travail sur `feat/brand-experience-v2`.

## Audit et choix techniques

La V1.4 contient une homepage React, une sculpture SVG, trois photos d’illustration, des routes juridiques distinctes et un formulaire Netlify avec détection statique. Les offres, tarifs, coordonnées, textes juridiques, validation et mécanisme POST sont conservés.

La V2 remplace les visuels du hero et des démonstrations par des compositions HTML/CSS en perspective. Le mouvement du pointeur est interpolé par CSS ; les écritures de variables sont regroupées avec `requestAnimationFrame`, sans état React à chaque mouvement. Le traitement du scroll du hero s’arrête hors écran et sur mobile. Touch et `prefers-reduced-motion` conservent des compositions statiques. Aucun scroll artificiel, WebGL ni nouveau paquet applicatif.

La palette devient noir, blanc et graphite. Les fontes Manrope et Space Grotesk sont conservées mais servies localement ; leur chargement externe échouait dans le navigateur de l’environnement. Les fichiers WOFF2 proviennent de Google Fonts, téléchargés avec vérification TLS. Les licences SIL OFL sont dans `public/fonts`.

## Identité et portrait

Le propriétaire a autorisé l’extraction du PDF, faute d’exports SVG séparés. `docs/brand/A1-STRATE-reference.pdf` conserve la planche fournie. `scripts/extract-brand-assets.py` copie exactement les chemins vectoriels et leurs matrices de transformation : page 5 pour la signature horizontale et l’emblème ; page 1 pour la signature verticale. Les lettres restent vectorisées : aucun remplacement par une police système, aucune reconstruction ou déformation de l’emblème. Les chemins des variantes claire et sombre ont été comparés à ceux du PDF.

`public/brand` contient les signatures claires/sombres, l’emblème seul, le favicon SVG sur carré noir et l’icône Apple. Ces assets restent flat, sans effet 3D. Les deux contrastes ont été inspectés dans le navigateur.

Le portrait provient du PNG sélectionné dans l’archive utilisateur. Il est recadré à `760 × 950` puis encodé en WebP, sans agrandissement ni transformation du visage. Le cadre de la section ajoute un traitement presque monochrome via CSS. Le fichier est `public/images/portrait-fondateur.webp`.

## Captures des appareils

Les captures NaturelÂme et les autorisations correspondantes n’étaient pas fournies. Les trois scènes montrent donc le site SABAN CORP lui-même, avec les labels « preview interne » et « démonstrations internes ». Ce ne sont pas des références clients livrées.

| Capture | Source réelle | Dimensions |
| --- | --- | --- |
| `public/images/previews/saban-desktop.webp` | Hero SABAN CORP | 1440 × 900 |
| `public/images/previews/saban-mobile.webp` | Hero SABAN CORP mobile | 390 × 844 |
| `public/images/previews/saban-tablet.webp` | Offres SABAN CORP tablette | 768 × 1024 |

Les trois écrans totalisent environ 93 Ko. Pour les régénérer, lancer Vite puis `python scripts/capture-previews.py` (Python Playwright, Chromium et ImageMagick nécessaires seulement à cette étape). `CAPTURE_BASE_URL` peut désigner un serveur local différent. Les captures sont figées : aucune iframe ni requête de capture à l’exécution. Les prochaines previews de projets pourront remplacer ces assets et leurs libellés dans `src/components/Showcase.tsx`, après autorisation, avec leur statut commercial exact.

## Vérifications exécutées

- Installation figée avec Node 24 et pnpm 11.19.0 ; TypeScript et build Vite réussis.
- Build normal indexable ; build `PREVIEW_NOINDEX=1` avec `noindex, nofollow` sur les trois HTML.
- Chromium : desktop 1440 × 900, tablettes 1024 × 768 et 768 × 1024, mobiles 390 × 844 et 375 × 812.
- Images décodées, fontes locales chargées, aucun débordement horizontal, aucune erreur JavaScript ni requête échouée.
- Menu tablette/mobile, focus initial, boucle clavier, Échap, liens internes et liens depuis les pages juridiques vérifiés. Taps tactiles testés ; pas de tilt sur touch.
- Réactions au pointeur et remise à zéro en mouvement réduit testées. Aucun blocage du scroll natif.
- Formulaire : champs obligatoires, email invalide, chargement, prévention des doubles soumissions, succès HTTP simulé et erreur HTTP simulée vérifiés. Aucune vraie demande envoyée à Netlify.
- CLS local mesuré : 0 aux cinq résolutions. Échantillon headless de 90 frames : médiane 16,7 ms et p95 16,8 ms. Cela ne constitue pas un benchmark sur un appareil physique.

Le JavaScript passe de 82,96 Ko à environ 83,47 Ko gzip ; le CSS de 7,55 Ko à 8,56 Ko gzip. Les écrans et le portrait sont chargés en différé avec dimensions réservées. Aucune nouvelle dépendance applicative.

## Validation publiée

La PR cible `feat/figma-integration`, pas `main`. Le déclenchement et l’URL de preview doivent être confirmés par Netlify ; un build local réussi ne prouve pas un déploiement. Vérifier sur la preview les URLs juridiques propres, la balise robots et la réception réelle d’un test dans Netlify Forms avant validation commerciale. Ne pas fusionner ni remplacer le site actuel sans accord du propriétaire.
