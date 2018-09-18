const fs = require('fs')
const path = require('path')

const CONFIG_TEMPLATE = '.graphqlconfig.template.yml'
const CONFIG_OUTPUT = '.graphqlconfig.yml'

const config = fs.readFileSync(path.resolve(process.cwd(), CONFIG_TEMPLATE), 'utf-8')
const envRegex = new RegExp(/(\${env:([A-z_]+)})/, 'g')

const envConfig = config.replace(envRegex, match => process.env[match.slice(6, -1)])

fs.writeFileSync(CONFIG_OUTPUT, envConfig, 'utf-8')

console.log('Temp .graphqlconfig.yml created!')
