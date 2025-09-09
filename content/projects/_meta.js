import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'All Projects',
  'homelink-retrofit': 'HomeLink Retrofit',
}

export default withTodos(meta, import.meta.url)

// eventually have this alphabetized and index pinned at top
