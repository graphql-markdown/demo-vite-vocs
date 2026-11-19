import { defineConfig } from 'vocs/config'
import { generateSidebar } from './lib/sidebar.ts'
import { remarkPromoteHeadings } from './lib/promote-headings.ts'
import path from 'node:path'

export default defineConfig({
  title: 'GraphQL-Markdown',
  basePath: '/demo-vite-vocs',
  srcDir: 'docs',
  renderStrategy: 'full-static',
  markdown: { remarkPlugins: [remarkPromoteHeadings] },
  sidebar: generateSidebar(path.join(import.meta.dirname, 'docs/pages'))
})
