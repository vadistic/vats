import plugin from '@start/plugin'
import { readJson } from './plugins'

export const test = async (args: string[]) => {
  process.env.NODE_ENV = 'test'

  const pkg = await readJson('package.json')

  const { run } = await import('jest-cli')

  const target =
    args.includes('--browser') || Object.keys(pkg.dependencies).includes('react')
      ? 'browser'
      : 'node'

  // @ts-ignore
  const { default: createConfig } = await import('../config/jest.config')

  const argv = [
    '--rootDir',
    process.cwd(),
    '--config',
    JSON.stringify(createConfig(target)),
    ...args.filter(arg => arg !== '--browser'),
  ]

  return plugin('jest', () => async () => {
    await run(argv, process.cwd())
  })
}
