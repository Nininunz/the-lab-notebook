import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  'homelink-retrofit': 'HomeLink Retrofit',
  'e83-n52-rebuild': 'E83 N52 Rebuild',
}

export default withTodos(meta, import.meta.url)
