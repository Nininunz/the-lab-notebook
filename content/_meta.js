import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: {
    title: 'Home',
    theme: {
      breadcrumb: false,
    },
  },
  projects: { title: 'Projects & Write-ups' },
  shortcuts: { title: 'Shortcuts & Quick Links', display: 'hidden' },
  docs: { title: 'Technical Documentation', display: 'hidden' },
  changelog: { title: 'Changelog', display: 'hidden' },
  playground: { title: 'Playground', display: 'hidden' },
  project: { title: 'All Projects' },
}

export default withTodos(meta, import.meta.url)
