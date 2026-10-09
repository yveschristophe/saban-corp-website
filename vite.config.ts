import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const noindexPreview =
  process.env.PREVIEW_NOINDEX === '1' ||
  ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT ?? '')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        accueil: fileURLToPath(new URL('./index.html', import.meta.url)),
        mentionsLegales: fileURLToPath(new URL('./mentions-legales.html', import.meta.url)),
        politiqueConfidentialite: fileURLToPath(new URL('./politique-de-confidentialite.html', import.meta.url)),
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'preview-noindex',
      transformIndexHtml(html) {
        if (!noindexPreview) return html
        return html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
      },
    },
  ],
})
