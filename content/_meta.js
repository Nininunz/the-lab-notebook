import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: {
    title: 'Home',
    theme: {
      breadcrumb: false,
    },
  },
  projects: { title: 'Projects & Write-ups' },
  project: { title: 'All Projects' },
  shortcuts: { title: 'Shortcuts & Quick Links' },
  docs: { title: 'Technical Documentation', display: 'hidden' },
  changelog: { title: 'Changelog', display: 'hidden' },
}

export default withTodos(meta, import.meta.url)
