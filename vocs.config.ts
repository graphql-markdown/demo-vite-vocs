import { defineConfig } from 'vocs'
import { generateSidebar } from './lib/sidebar'
import path from 'node:path'

export default defineConfig({
  title: 'Docs',
  sidebar: generateSidebar(path.join(__dirname, 'docs/pages'))
})
