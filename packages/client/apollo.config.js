require('@vats/config').envConfig()

module.exports = {
  client: {
    name: 'vats-client',
    service: 'vats-server1',
    includes: ['src/**/*.{ts,tsx}'],
    excludes: ['src/generated/*.graphql'],
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
