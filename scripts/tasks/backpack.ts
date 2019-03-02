import spawn from '@start/plugin-spawn'

/**
 * just call backpack because my dev server has some errros :/
 */
export const backpack = async (args: string[]) => {
  // todo: copy config?

  return spawn(['backpack', ...args])
}
