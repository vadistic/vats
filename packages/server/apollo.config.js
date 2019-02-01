require('dotenv').config()

module.exports = {
  service: {
    name: 'vats-server-1',
    localSchemaFile: 'src/generated/server.graphql',
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
