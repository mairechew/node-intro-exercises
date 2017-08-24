var express = require('express')
var server = express()

server.get('/about', function (request,response) {
  response.send('Hello friends!')
})

server.listen(4000)
