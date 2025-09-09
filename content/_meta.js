import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: {
    title: 'Home',
    theme: {
      breadcrumb: false,
    },
  },
  projects: 'Projects',
  'docs-guides': 'Docs & Guides',
}

export default withTodos(meta, import.meta.url)
