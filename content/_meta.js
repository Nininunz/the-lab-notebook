import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'Home',
  projects: 'Projects',
  miscellaneous: 'Miscellaneous',
  'home-alt': {
    title: 'Alt',
    theme: {
      breadcrumb: false,
    },
  },
}

export default withTodos(meta, import.meta.url)
