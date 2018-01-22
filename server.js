const server = require('express')()

require('./config/express')(server)
require('./config/routes')(server)

server.listen(8000, err => {
  if (err) console.log(err)
  console.log(`Express server is 👂 on port 8000`)
})