import chalk from 'chalk'
import EventEmitter from 'events'
import path from 'path'
import StackUtils from 'stack-utils'

type LogLevel = 'verbose' | 'plugin' | 'error'
type StartError = Error | string[] | string | null

export const reporter = (taskName: string, logLevel: LogLevel = 'plugin') => {
  const emitter = new EventEmitter()

  if (logLevel !== 'error') {
    console.log(`${chalk.magentaBright(`${taskName}.starting...`)}`)
  }

  emitter.on('start', (pluginName: string) => {
    if (logLevel === 'verbose') {
      console.log(`${chalk.yellow(`${taskName}.${pluginName}`)}: start`)
    }
  })

  emitter.on('message', (pluginName: string, message: string) => {
    if (logLevel === 'verbose') {
      console.log(`${chalk.cyan(`${taskName}.${pluginName}`)}: ${message}`)
    }
  })

  emitter.on('path', (pluginName: string, pathToLog: string) => {
    const relativeFile = path.relative(process.cwd(), pathToLog)
    if (logLevel === 'verbose') {
      console.log(`${chalk.blue(`${taskName}.${pluginName}`)}: ${relativeFile}`)
    }
  })

  emitter.on('done', (pluginName: string) => {
    if (logLevel === 'verbose' || logLevel === 'plugin') {
      console.log(`${chalk.green(`${taskName}.${pluginName}`)}: done`)
    }
  })

  emitter.on('error', (pluginName: string, error: StartError) => {
    // hard error
    if (error instanceof Error) {
      const stackUtils = new StackUtils({
        cwd: process.cwd(),
        internals: StackUtils.nodeInternals(),
      })
      const stack = stackUtils.clean(error.stack!)

      console.error(`${chalk.red(`${taskName}.${pluginName}`)}: ${error.message}`)
      console.error(`\n${chalk.red(stack)}`)
      // array of "soft" errors
    } else if (Array.isArray(error)) {
      error.forEach(message => {
        console.error(`${chalk.red(`${taskName}.${pluginName}`)}: ${message}`)
      })
      // "soft" error
    } else if (typeof error === 'string') {
      console.error(`${chalk.red(`${taskName}.${pluginName}`)}: ${error}`)
    }

    console.error(`${chalk.red(`${taskName}.${pluginName}`)}: error`)
  })

  return emitter
}
