const path = require('path')

const envDir = path.resolve(process.cwd(), '../..')

const configure = () => {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }

  if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: envDir + '/' + '.env.production.local' })
    require('dotenv').config({ path: envDir + '/' + '.env.production' })
  }

  if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: envDir + '/' + '.env.development.local' })
    require('dotenv').config({ path: envDir + '/' + '.env.development' })
  }

  if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: envDir + '/' + '.env.test.local' })
    require('dotenv').config({ path: envDir + '/' + '.env.test' })
  }

  require('dotenv').config({ path: envDir + '/' + '.env.local' })
  require('dotenv').config({ path: envDir + '/' + '.env' })
}

module.exports = configure
