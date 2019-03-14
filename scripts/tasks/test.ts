import plugin from '@start/plugin'
import { readJson } from './plugins'

export const test = async (args: string[]) => {
  process.env.NODE_ENV = 'test'

  const pkg = await readJson('package.json')

  const target =
    args.includes('--react') || Object.keys(pkg.dependencies).includes('react') ? 'react' : 'node'

  const { run } = await import('jest-cli')
  // @ts-ignore
  const { default: createConfig } = await import('../config/jest.config')

  const argv = [
    '--rootDir',
    process.cwd(),
    '--config',
    JSON.stringify(createConfig(target)),
    ...args.filter(arg => arg !== '--react'),
  ]

  return plugin('jest', () => async () => {
    await run(argv, process.cwd())
  })
}
