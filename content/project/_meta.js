import { enrichMetaWithDrafts } from '@/lib/meta-utils.js'

const meta = {
  // index: 'All Projects',
  'e83-cas3-retrofit': 'CAS3 Retrofit',
  'ha-smarthub': 'ha-smarthub',
  'mysterious-n52-carbon-valves': 'N52 Engine Carbon Valve Failure Analysis',
  'junkyard-intelligence-platform': 'Junkyard Intelligence Platform',
  'homelink-retrofit': 'HomeLink Retrofit',
  'gpt-electron': 'gpt-electron',
}

export default enrichMetaWithDrafts(meta, import.meta.url)
