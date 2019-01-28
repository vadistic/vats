require('dotenv').config()

module.exports = {
  client: {
    service: 'vats-server1',
    clientOnlyDirectives: ['connection', 'type'],
    clientSchemaDirectives: ['client', 'rest'],
    includes: ['src/**/*.{ts,tsx}'],
    excludes: ['src/generated/server.graphql']
  },
  service: {
    localSchemaFile: 'src/generated/server.graphql'
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
}
