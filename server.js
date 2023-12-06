const express = require("express");
const server = express();
const routes = require('./src/routes')
const PORT = 3007;

// server.listen(PORT);
// console.log(`Aplicacao ouvindo na porta ${PORT}`);
server.use('/', routes)

server.listen(PORT, function () {
  console.log(`Aplicacao ouvindo na porta ${PORT}`);
});
