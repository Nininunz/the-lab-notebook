import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'Home',
  projects: 'Projects',
  miscellaneous: 'Miscellaneous',
}

export default withTodos(meta, import.meta.url)
