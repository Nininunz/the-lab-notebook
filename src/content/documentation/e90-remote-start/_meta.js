import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'The Concept',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
