import sequence from '@start/plugin-sequence'
import spawn from '@start/plugin-spawn'
/**
 * TODO: serve builds (there's small shizzle with relative paths)
 */
export const serve = async (args: string[]) => {
  const BUILD_DIR = 'build'
  const serveArgs = ['serve', BUILD_DIR, ...args]

  const { readJson } = await import('./plugins/utils')
  const pkg = await readJson('package.json')

  const basepath = (pkg.homepage || '').replace(/.*\.[A-z]+\//, '').replace(/\/$/, '')

  if (pkg.homepage && basepath !== '') {
    throw Error(`homepage is set in package.json and 'serve' cannot redirect it`)
  }

  return sequence(
    spawn(serveArgs, {
      stdout: process.stdout,
      stderr: process.stderr,
    }),
  )
}
