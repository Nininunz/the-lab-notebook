import { withTodos } from '@/lib/meta-utils.js'

const meta = {
  introduction: 'Introduction',
  'choosing-the-right-mirror': 'Choosing the Right Mirror',
  'mirror-removal-and-installation': 'Mirror Removal and Installation',
  wiring: 'Wiring',
  conclusion: 'Conclusion',
}

export default withTodos(meta, import.meta.url)
