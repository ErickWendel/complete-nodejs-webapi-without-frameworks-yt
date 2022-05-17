import http from 'node:http'
import handler from './handler.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(handler)
  .listen(PORT, () => console.log(`server is running at  ${PORT}`))

export {
  server
}