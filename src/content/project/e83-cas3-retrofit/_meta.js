import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'Case Study',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
