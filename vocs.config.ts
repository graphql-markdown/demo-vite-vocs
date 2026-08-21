import { defineConfig } from 'vocs/config'
import { generateSidebar } from './lib/sidebar'
import path from 'node:path'

export default defineConfig({
  title: 'Docs',
  basePath: '/demo-vite-vocs',
  srcDir: 'docs',
  renderStrategy: 'full-static',
  sidebar: generateSidebar(path.join(__dirname, 'docs/pages'))
})
