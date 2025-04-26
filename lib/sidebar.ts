import fs from 'node:fs'
import path from 'node:path'

function formatText(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function generateSidebarItems(dir: string, baseDir: string): any[] {
  const items = []
  const files = fs.readdirSync(dir).sort()
  // Process directories first
  const directories = files.filter(file => 
    fs.statSync(path.join(dir, file)).isDirectory()
  )

  // Process .md(x) files (excluding index.mdx)
  const mdxFiles = files.filter(file => 
    [".md", ".mdx"].includes(path.extname(file)) &&
    !file.startsWith("index.md")
  )

  // Add directories first (always include them)
  for (const directory of directories) {
    const fullPath = path.join(dir, directory)
    const nestedItems = generateSidebarItems(fullPath, baseDir)
    
    items.push({
      text: formatText(directory),
      items: nestedItems,
      collapsed: false
    })
  }

  // Add .md(x) files second
  for (const file of mdxFiles) {
    const fullPath = path.join(dir, file)
    const relativePath = path.relative(baseDir, fullPath)
    const name = path.parse(file).name
    
    items.push({
      text: formatText(name),
      link: `/${relativePath.replace(/\.mdx?$/, '')}`
    })
  }

  return items
}

export function generateSidebar(pagesDir: string = ''): any[] {  
  try {
    if (!fs.existsSync(pagesDir)) {
      console.error('Directory does not exist:', pagesDir)
      return []
    }
    
    const sidebar = generateSidebarItems(pagesDir, pagesDir)
    return sidebar
  } catch (error) {
    console.error('Error generating sidebar:', error)
    return []
  }
}
