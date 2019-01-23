require('dotenv').config()

module.exports = {
  service: {
    endpoint: process.env.ENDPOINT,
    name: process.env.ENGINE_SERVICE_NAME,
  },
}
