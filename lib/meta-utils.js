import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export function enrichMetaWithDrafts(meta, metaFilePath) {
  const __filename = fileURLToPath(metaFilePath)
  const __dirname = dirname(__filename)
  const todosPath = join(__dirname, 'todos.md')
  const zeroDraftPath = join(__dirname, 'zero_draft.md')

  const newMeta = { ...meta }
  if (existsSync(todosPath)) {
    newMeta.todos = { display: 'hidden' }
  }
  if (existsSync(zeroDraftPath)) {
    newMeta.zero_draft = { display: 'hidden' }
  }
  return newMeta
}
