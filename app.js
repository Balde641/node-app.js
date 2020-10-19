const http = require('http');

const hostname = 'localhost';
const port = 3000;
const path = 'team';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Balde Mamadou');
});

server.listen(port, hostname, () => {
    console.log('Server started on port ' +port +path);
});