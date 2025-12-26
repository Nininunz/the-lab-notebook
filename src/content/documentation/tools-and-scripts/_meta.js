import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  index: 'Overview',
  fuckai: 'Fuck AI',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
