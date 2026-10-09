# SABAN CORP

Standalone React, TypeScript, Vite and Tailwind CSS v4 website. The Figma Make runtime is not required.

## Local workflow

Use Node.js 24 (`.nvmrc`) and pnpm 11.19.0 (`package.json`). Run `pnpm install --frozen-lockfile`, then `pnpm dev` to start Vite. The server is not assumed to be running. Validate changes with `pnpm exec tsc --noEmit` and `pnpm build`.

Netlify runs the build from `netlify.toml` and publishes `dist`. Preview deploy contexts add a `noindex, nofollow` meta tag; `PREVIEW_NOINDEX=1 pnpm build` does the same locally.

## Project structure

- `src/main.tsx` mounts `src/App.tsx` and imports `src/index.css`.
- `src/App.tsx` contains the page and its interaction logic.
- `src/index.css` contains the existing visual design and Tailwind CSS v4 import.
- `index.html` contains French language and SEO metadata.
- `mentions-legales.html` and `politique-de-confidentialite.html` are additional Vite HTML entries with route-specific metadata; `src/LegalPages.tsx` contains the supplied legal text.
- `vite.config.ts` configures React, Tailwind and preview indexing.

The CSS sculpture and existing reduced-motion behavior are intentional. The contact form uses Netlify Forms: its static registration form in `index.html` must stay in sync with the React form in `src/App.tsx`. Local Vite cannot confirm delivery; verify a real submission in Netlify Forms after deployment. The form and footer link to the internal legal pages; do not replace supplied legal content with invented details.
