import copy from '@start/plugin-copy'
import find from '@start/plugin-find'
import sequence from '@start/plugin-sequence'
import { config } from '../config'

/**
 * By glob to dist
 */
export const copyfiles = async (args: string[]) => {
  // accept space separated input and remember to remove dots

  return sequence(find([...args, ...config.IGNORE_GLOB]), copy('dist'))
}
