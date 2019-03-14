const path = require('path')
const fs = require('fs')

module.exports = target => {
  if (!target) {
    throw Error('No env target specified for jest config!')
  }

  const setupTestsFile = fs.existsSync(path.resolve(process.cwd(), 'src/setup-tests.ts'))
    ? `<rootDir>/src/setup-tests.ts`
    : undefined

  // to alias paths of monorepo packages for live-reloading and babel transforming
  const packagesPath = path.resolve(process.cwd(), '../../packages')
  const packages = fs.readdirSync(packagesPath)

  const config = {
    clearMocks: true,

    collectCoverageFrom: ['src/**/*.{ts,tsx}'],

    coverageDirectory: 'coverage',

    setupFilesAfterEnv: [setupTestsFile],

    moduleNameMapper: {
      // alias monorepo packages
      [`@vats/(${packages.join('|')})(.*)$`]: packagesPath + `/$1/src$2`,
    },

    moduleFileExtensions: ['js', 'jsx', 'mjs', 'ts', 'tsx', 'json'],

    watchPlugins: [
      require.resolve('jest-watch-typeahead/filename'),
      require.resolve('jest-watch-typeahead/testname'),
    ],

    testPathIgnorePatterns: ['\\\\node_modules\\\\'],

    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

    // ?!@vats) is nice idea but it does not work - needs module mapping
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\](?!@vats).+\\.(js|jsx|ts|tsx)$'],

    verbose: false,
  }

  if (target === 'react') {
    config.moduleNameMapper = Object.assign(config.moduleNameMapper, {
      // alias fabric commonjs build
      'office-ui-fabric-react/lib/(.*)$': 'office-ui-fabric-react/lib-commonjs/$1',
      '@uifabric/icons/lib/(.*)$': '@uifabric/icons/lib-commonjs/$1',
      '@uifabric/styling/lib/(.*)$': '@uifabric/styling/lib-commonjs/$1',
    })

    config.setupFiles = [require.resolve('react-app-polyfill/jsdom')]

    config.testEnvironment = 'jsdom'

    config.testURL = 'http://localhost'

    config.transform = { '^.+\\.(js|jsx|ts|tsx)$': require.resolve('./babel-transform.react.js') }
  }

  if (target === 'node') {
    config.transform = { '^.+\\.(js|jsx|ts|tsx)$': require.resolve('./babel-transform.node.js') }

    config.testEnvironment = 'node'
  }

  return config
}
