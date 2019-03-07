import copy from '@start/plugin-copy'
import find from '@start/plugin-find'
import sequence from '@start/plugin-sequence'

/**
 * By glob to dist
 */
export const copyfiles = async (args: string[]) => {
  // accept space separated input and remember to remove dots

  return sequence(find([...args]), copy('dist'))
}
