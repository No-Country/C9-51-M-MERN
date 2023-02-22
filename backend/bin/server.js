const http = require('http');
const app = require('../index');

const server = http.createServer(app);

server.listen(3000);

server.on('listening', () => {
    console.log('Servidor Ok en puerto 3000');
})
