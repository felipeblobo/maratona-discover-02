const express = require('express')
const server = express()
const port = 3000
const routes = require('./routes')

server.use(express.static('public'))

server.set('view engine', 'ejs')

server.use(routes)

server.listen(port, console.log(`Servidor rodando na porta ${port}.`))
