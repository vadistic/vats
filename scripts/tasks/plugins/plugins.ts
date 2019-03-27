import plugin from '@start/plugin'
import { copyDir } from './utils'

export const copyDirPlugin = (absolutesource: string, relativeTarget: string) =>
  plugin('copyDir', () => async () => {
    copyDir(absolutesource, relativeTarget)
  })
