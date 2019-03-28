import spawn from '@start/plugin-spawn'

export const analyze = async (args: string[]) => {
  const bundlesGlob = 'build/static/js/*.js'

  return spawn(['source-map-explorer', bundlesGlob, ...args])
}
