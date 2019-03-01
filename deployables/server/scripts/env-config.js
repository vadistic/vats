const envConfig = () => {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }

  if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: './.env.production.local' })
    require('dotenv').config({ path: './.env.production' })
  }

  if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: './.env.development.local' })
    require('dotenv').config({ path: './.env.development' })
  }

  if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: './.env.test.local' })
    require('dotenv').config({ path: './.env.test' })
  }

  require('dotenv').config({ path: './.env.local' })
  require('dotenv').config({ path: './.env' })
}

module.exports = envConfig()
