import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: {
    title: 'Home',
    theme: {
      breadcrumb: false,
    },
  },
  projects: 'Projects & Write-ups',
  'docs-guides': 'Docs & Guides',
  shortcuts: 'Shortcuts & Quick Links',
  docs: 'Technical Documentation',
  PROJECT_STRUCTURE: 'Project Structure',
  changelog: 'Changelog',
}

export default withTodos(meta, import.meta.url)
