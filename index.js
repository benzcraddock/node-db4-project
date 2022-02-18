// requiring dotenv and having port inside .env file allows us to remove ' || 9000 ' from port below
require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
