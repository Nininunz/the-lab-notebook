import { enrichMetaWithDrafts } from '@lib/meta-utils.js'

const meta = {
  index: 'The Mysterious Failure',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
