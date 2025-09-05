import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'Home',
}

export default withTodos(meta, import.meta.url)
