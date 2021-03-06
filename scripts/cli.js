#!/usr/bin/env node

require = require('esm')(module, {
  mainFields: ['module', 'main'],
})

require('@babel/register')({
  // this to ensure lerna can run scripts in packages
  cwd: __dirname,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
})

const { reporter } = require('./tasks/reporter')
const tasks = require('./tasks')

;(async () => {
  const taskName = process.argv[2]
  const isVerbose = process.argv.includes('--verbose')
  const isSilent = process.argv.includes('--silent')

  const logLevel = isVerbose ? 'verbose' : isSilent ? 'error' : undefined

  const taskArgs = process.argv.slice(3).filter(arg => !['--verbose', '--silent'].includes(arg))

  const task = tasks[taskName]

  if (typeof taskName === 'undefined' || typeof task === 'undefined') {
    console.warn(
      '\n'`One of the following task names is required:\n* ${Object.keys(tasks).join('\n* ')}`,
    )

    process.exit(0)
  }

  const taskRunner = await task(taskArgs)

  try {
    await taskRunner(reporter(taskName, logLevel), logLevel)()
  } catch (error) {
    if (error !== null) {
      console.log(error)
    }

    process.exit(1)
  }
})()
