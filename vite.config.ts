import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const noindexPreview =
  process.env.PREVIEW_NOINDEX === '1' ||
  ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT ?? '')

export default defineConfig({
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
