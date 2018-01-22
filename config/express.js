const bodyParser = require('body-parser')
const logger = require('morgan')

module.exports = server => {
  server.use(logger('dev'))
  server.use(bodyParser.json())
}