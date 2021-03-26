const express = require('express');
const server = express();
const port = 3000;


server.get('/', (req,res) => {
    return res.sendFile(__dirname + '/views/index.html')
})


server.listen(port, console.log(`Servidor rodando na porta ${port}.`))