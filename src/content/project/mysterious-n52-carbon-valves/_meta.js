import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  index: 'The Mysterious BMW N52 Engine Failure',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
