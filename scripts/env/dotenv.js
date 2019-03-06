const path = require('path')
const dotenv = require('dotenv')

const config = () => {
  // quite basic, but enough
  const envDir = file => {
    // root
    if (path.basename(process.cwd()) === 'vats') {
      return file
    }
    // package
    return '../../' + file
  }

  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
  }

  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: envDir('.env.production.local') })
    dotenv.config({ path: envDir('.env.production') })
  }

  if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development.local' })
    dotenv.config({ path: envDir('.env.development') })
  }

  if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: envDir('.env.test.local') })
    dotenv.config({ path: envDir('.env.test') })
  }

  dotenv.config({ path: envDir('.env.local') })
  dotenv.config({ path: envDir('.env') })
}

module.exports = config
