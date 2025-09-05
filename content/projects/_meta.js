import { withTodos } from '../../lib/meta-utils.js'

const meta = {
  'homelink-retrofit': 'HomeLink Retrofit',
}

export default withTodos(meta, import.meta.url)
