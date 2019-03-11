import spawn from '@start/plugin-spawn'

/**
 * just call backpack because my dev server has some errros :/
 */
export const test = async (args: string[]) => {
  // todo: copy config?

  // @ts-ignore
  const { default: config } = await import('../env/dotenv')
  config()

  return spawn(['jest', ...args])
}
