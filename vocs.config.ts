import { defineConfig } from 'vocs/config'
import { generateSidebar } from './lib/sidebar.ts'
import path from 'node:path'

export default defineConfig({
  title: 'Docs',
  basePath: '/demo-vite-vocs',
  srcDir: 'docs',
  renderStrategy: 'full-static',
  sidebar: generateSidebar(path.join(import.meta.dirname, 'docs/pages'))
})
