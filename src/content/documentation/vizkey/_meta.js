import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Overview',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
