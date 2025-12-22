import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'The Concept',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
