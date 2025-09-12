import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'SmartHub Integration',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
