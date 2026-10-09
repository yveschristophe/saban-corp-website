# SABAN CORP

Site vitrine React, TypeScript, Vite et Tailwind CSS.

## Développement local

Utiliser Node.js 24 (voir `.nvmrc`) et pnpm 11.19.0 (voir `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Ouvrir l'adresse locale affichée par Vite. Pour vérifier le projet :

```sh
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

Le formulaire de contact utilise Netlify Forms. `index.html` contient un formulaire masqué qui permet à Netlify de détecter les champs au build ; le formulaire React envoie les mêmes noms de champs en `application/x-www-form-urlencoded` vers `/`. Le champ `bot-field` est un honeypot. Aucun service supplémentaire n'est nécessaire.

Un serveur Vite local ne traite pas les soumissions Netlify Forms. Les états de succès et d'erreur peuvent être testés localement avec des réponses HTTP simulées, mais **la réception réelle doit être confirmée après déploiement dans Netlify**. Une réponse 2xx seule ne remplace pas cette vérification.

Les pages `/mentions-legales` et `/politique-de-confidentialite` sont des entrées HTML distinctes du build Vite, avec des métadonnées propres et le même composant React pour le header et le footer. Le formulaire renvoie directement vers la politique interne ; aucune variable `VITE_PRIVACY_POLICY_URL` n'est requise. Les réécritures ciblées dans `netlify.toml` servent ces URLs sans rediriger les soumissions Netlify Forms à `/`.

## Preview Netlify

`netlify.toml` lance `pnpm build` et publie `dist`. Les builds Netlify de type `deploy-preview` et `branch-deploy` reçoivent une balise `noindex, nofollow`. L'URL principale actuelle de la preview peut relever du contexte Netlify `production` : dans ce cas, définir `PREVIEW_NOINDEX=1` dans les variables d'environnement de **ce site de preview**, puis déclencher un nouveau déploiement. Retirer cette variable ou utiliser une configuration de production distincte avant le lancement du futur site indexable. Pour vérifier le build localement :

```sh
PREVIEW_NOINDEX=1 pnpm build
```

Un build normal ne reçoit pas cette balise. Les polices Manrope et Space Grotesk sont chargées depuis Google Fonts ; un réseau qui bloque ce service affichera les polices de repli.

## Activation et vérification Netlify Forms

1. Vérifier que la détection des formulaires est activée pour le site Netlify. Déployer le build contenant le formulaire statique de `index.html`, puis vérifier que le formulaire `contact` apparaît dans l'espace Forms de Netlify. Si un formulaire est détecté pour la première fois, un nouveau déploiement peut être nécessaire après activation de la détection.
2. Configurer une notification email pour le formulaire `contact` dans Netlify Forms, avec une adresse de réception réelle, puis vérifier cette boîte et ses courriers indésirables. Ne pas considérer la notification comme configurée tant qu'un message test n'a pas été reçu.
3. Définir `PREVIEW_NOINDEX=1` pour le site de preview actuel et redéployer. Vérifier sur les trois URLs publiées la présence de `<meta name="robots" content="noindex, nofollow">` et contrôler l'éventuel en-tête `X-Robots-Tag`. Une balise `noindex` suffit si aucun en-tête contradictoire n'est envoyé. Ne pas appliquer ce réglage au futur site public.
4. Ouvrir directement `/mentions-legales` et `/politique-de-confidentialite`, rafraîchir chaque page et vérifier les liens du footer et du formulaire. Contrôler que les titres et meta descriptions sont distincts.
5. Sur le nouveau déploiement, remplir Nom, Email, Type de projet et Message avec un identifiant de test unique. Vérifier que le navigateur montre l'état d'envoi puis la confirmation seulement après une réponse HTTP réussie ; vérifier ensuite **la même demande** dans Netlify Forms et dans la notification email. Tester aussi la validation des champs obligatoires et un échec réseau temporaire : aucun succès ne doit être affiché.

Les entrées du formulaire contiennent des données personnelles : ne pas utiliser de véritables données de prospects pour le test. La réception dans Netlify et le fonctionnement des pages juridiques sur le nouveau déploiement doivent être contrôlés après chaque changement concerné. Appliquer aussi dans Netlify et Gmail la durée de conservation indiquée dans la politique ; aucune suppression automatisée n'est implémentée ici.
