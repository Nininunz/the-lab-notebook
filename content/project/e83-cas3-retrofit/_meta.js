import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'Introduction',
}

export default withTodos(meta, import.meta.url)

// eventually have this alphabetized and index pinned at top
