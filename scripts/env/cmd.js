#!/usr/bin/env node

const spawn = require('cross-spawn')

const argv = process.argv.slice(3)
const command = process.argv[2]

const config = require('./dotenv')

config()

spawn(command, argv, { stdio: 'inherit' }).on('exit', exitCode => {
  process.exit(exitCode)
})
