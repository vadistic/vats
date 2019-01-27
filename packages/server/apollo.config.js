require('dotenv').config()

module.exports = {
  service: {
    name: process.env.ENGINE_SERVICE_NAME,
    localSchemaFile: './src/generated/server.graphql',
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
