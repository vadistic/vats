import sequance from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
import path from 'path'
import { copyDirPlugin } from './plugins'

/**
 * just call backpack because my custom dev server has some errros :/
 */
export const backpack = async (args: string[]) => {
  const templateConfigPath = path.resolve(__dirname, '../.backpack')

  return sequance(copyDirPlugin(templateConfigPath, '.'), spawn(['backpack', ...args]))
}
