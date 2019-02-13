require('./scripts/env-config')

module.exports = {
  service: {
    localSchemaFile: 'src/generated/server.graphql',
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
