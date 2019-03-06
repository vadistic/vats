const config = require('@vats/start/env/dotenv')

config()

module.exports = {
  service: {
    name: process.env.ENGINE_SERVICE_NAME,
    localSchemaFile: 'src/generated/server.graphql',
    excludes: ['node_modules/**', 'dist/**', 'src/generated/*.graphql'],
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
