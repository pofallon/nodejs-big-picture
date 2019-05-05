const http = require('http')
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Encoding', 'gzip')
  fs.createReadStream(path.join(__dirname, 'lorem.txt'))
    .pipe(zlib.createGzip())
    .pipe(res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})