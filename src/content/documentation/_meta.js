import { enrichMetaWithDrafts } from '@/src/app/meta-utils.js'

const meta = {
  'e90-remote-start': 'E90 Remote Start',
  'homelink-retrofit': 'HomeLink Retrofit',
  'n52-failure-analysis': 'N52 Failure Analysis',
  'the-lab-notebook': 'The Lab Notebook',
  'tools-and-scripts': 'Tools & Scripts',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
