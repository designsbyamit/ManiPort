import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // GitHub Pages deploys to https://<username>.github.io/<repo-name>/
  // Update this to match your repository name, e.g. '/ManiPort/'
  base: '/ManiPort/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
