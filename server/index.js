var express = require('express')
var server = express()
var maire = require('./me.json')

server.get('/', function (request,response) {
  response.send('Go to /maire to find out more about me!')
})

server.get('/maire', function (request,response) {
  response.json(maire)
})

server.get('*', function (request,response) {
  response.status(400)
  response.send('Sorry bud! Welcome to the wrong page')
})



server.listen(4000)
