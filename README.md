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

Le formulaire de contact est volontairement désactivé dans cette preview : aucune demande n'est transmise.

## Preview Netlify

`netlify.toml` lance `pnpm build` et publie `dist`. Les builds Netlify de type `deploy-preview` et `branch-deploy` reçoivent une balise `noindex, nofollow`. Pour la même vérification localement :

```sh
PREVIEW_NOINDEX=1 pnpm build
```

Un build normal ne reçoit pas cette balise. Les polices Manrope et Space Grotesk sont chargées depuis Google Fonts ; un réseau qui bloque ce service affichera les polices de repli.
