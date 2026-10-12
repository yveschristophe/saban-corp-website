# SABAN CORP V2.1 — Sculpture STRATE et polish ciblé

Base : `feat/brand-experience-v2`, commit `c85ad29`. Branche : `feat/strate-sculpture-v2-1`. La PR cible la V2 ; aucune fusion automatique.

## Sculpture et hero

`src/components/StrateSculpture.tsx` remplace les cadres V2. Trois volumes angulaires indépendants, asymétriques et séparés en profondeur évoquent le rythme du S STRATE. Leur géométrie est créée pour la sculpture : elle ne copie pas les tracés SVG du logo officiel, qui reste flat et inchangé.

Les volumes combinent CSS 3D et biseaux SVG statiques, avec trois surfaces principales. Le matériau reste graphite mat/satiné, sans chrome, or ou néon. Le pointeur et le scroll utilisent les mécanismes V2 existants, limités avec `requestAnimationFrame` et arrêtés hors écran. Les interactions sont désactivées sur touch et en mouvement réduit. L’apparition du hero et la disposition de ses CTA sont conservées.

Le prototype à nombreuses faces superposées a été remplacé après une mesure défavorable en mouvement. Avec les trois surfaces finales, un échantillon Chromium headless de 120 frames au repos puis pendant un mouvement synthétique donne environ 16,7 ms de médiane et de p95, sans intervalle supérieur à 33,5 ms. Ce test local n’est pas un benchmark sur matériel physique.

## Démonstrations diversifiées

Aucune capture NaturelÂme ou autre projet autorisé n’a été trouvée dans le dépôt ou les archives fournies. Les devices existants affichent donc quatre vues distinctes et réelles de SABAN CORP, avec le label « DÉMONSTRATION INTERNE ». Aucun client, résultat ni réalisation externe n’est ajouté.

| Asset | Contenu réel | Dimensions |
| --- | --- | --- |
| `saban-desktop.webp` | Hero avec sculpture STRATE | 1440 × 900 |
| `saban-mobile.webp` | Formulaire de contact vide, sans soumission | 390 × 844 |
| `saban-tablet.webp` | Offres | 768 × 1024 |
| `saban-method-mobile.webp` | Méthode | 390 × 844 |

Ces captures sont dans `public/images/previews`, générées avec `scripts/capture-previews.py`, et totalisent environ 99 Ko. Elles sont différées au chargement et leur espace est réservé. Le script utilise les coordonnées document des éléments pour cadrer correctement le formulaire. Les titres, textes, catégories et alt des démonstrations décrivent leur contenu réel.

## Polish et non-régression

Les petites légendes et les descriptions des démonstrations deviennent plus lisibles. L’encadrement, la palette et le rythme commercial V2 sont conservés. Aucun nouveau paquet applicatif : JavaScript gzip 83,88 Ko contre 83,47 Ko en V2 ; CSS gzip 8,49 Ko contre 8,56 Ko.

Les offres et prix, méthode, portrait, logo, formulaire et mécanisme POST, textes juridiques, ancres, configuration Netlify et dépendances sont inchangés. Les comparaisons avec la base V2 vérifient directement ces éléments protégés.

## Vérifications

Installation figée, TypeScript et build Vite ; Chromium à 1440 × 900, 1024 × 768, 768 × 1024, 390 × 844 et 375 × 812. Images et fontes locales chargées, aucun débordement horizontal ni erreur JavaScript. CLS du build final mesuré à 0 aux cinq résolutions.

Navigation clavier, focus du menu, Échap, liens et routes juridiques, pointeur, mouvement réduit et navigation tactile vérifiés. Formulaire testé avec validation des champs, chargement, prévention des doubles soumissions, succès et erreur HTTP simulés. Aucune réception réelle dans Netlify n’est revendiquée.

Le build preview conserve `noindex` et le build normal reste indexable. La preview publiée doit être inspectée après authentification si Netlify la protège. Réception réelle du formulaire et validation visuelle finale à confirmer par le propriétaire avant toute fusion.
