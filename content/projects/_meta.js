import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  index: 'All Projects',
  'e83-cas3-retrofit': 'CAS3 Retrofit',
  'ha-smarthub': 'ha-smarthub',
}

export default withTodos(meta, import.meta.url)

// eventually have this alphabetized and index pinned at top
