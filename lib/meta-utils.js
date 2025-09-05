import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export function withTodos(meta, metaFilePath) {
  const __filename = fileURLToPath(metaFilePath)
  const __dirname = dirname(__filename)
  const todosPath = join(__dirname, 'todos.md')

  if (existsSync(todosPath)) {
    return {
      ...meta,
      todos: {
        display: 'hidden',
      },
    }
  }

  return meta
}
