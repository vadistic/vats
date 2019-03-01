const fs = require('fs')
const path = require('path')

require('./env-config')

const nowJson = {
  name: 'vats-server',
  alias: 'vats-server',
  public: true,
  version: 1,
  env: {
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SERVICE: process.env.PRISMA_SERVICE,
    PRISMA_STAGE: process.env.PRISMA_STAGE,

    ENGINE_SERVICE_NAME: process.env.ENGINE_SERVICE_NAME,
    ENGINE_API_KEY: '@engine_api_key',

    PORT: process.env.PORT,
    LIVE_ENDPOINT: process.env.LIVE_ENDPOINT,
  },
}

fs.writeFileSync(path.resolve(process.cwd(), 'now.json'), JSON.stringify(nowJson, null, 2), 'utf-8')

console.log('Fresh now.json generated')
