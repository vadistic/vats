const envConfig = () => {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }

  console.log('NODE_ENV', process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: './.env.production.local', debug: true })
    require('dotenv').config({ path: './.env.production', debug: true })
  }

  if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: './.env.development.local', debug: true })
    require('dotenv').config({ path: './.env.development', debug: true })
  }

  require('dotenv').config({ path: './.env.local', debug: true })
  require('dotenv').config({ path: './.env', debug: true })
}

module.exports = envConfig()
