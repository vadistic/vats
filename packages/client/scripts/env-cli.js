#!/usr/bin/env node

const spawn = require('cross-spawn')

const argv = process.argv.slice(2)

require('./env-config')

spawn('echo', argv, { stdio: 'inherit' }).on('exit', exitCode => {
  process.exit(exitCode)
})
