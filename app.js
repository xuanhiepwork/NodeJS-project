const http = require('http');

const routes = require('./routes');

// console.log

const server = http.createServer(routes.handler);

server.listen(3200);

//bài 50 - 0:00
