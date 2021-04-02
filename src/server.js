const express = require('express');
const server = express();
const port = 3000;
const routes = require('./routes');
const path = require('path');

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

server.set('views', path.join(__dirname, '/views'));

server.set('view engine', 'ejs');

server.use(routes);

server.listen(port, console.log(`Servidor rodando na porta ${port}.`));
