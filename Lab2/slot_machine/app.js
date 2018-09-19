const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url != '/spin' && req.url != '/play') {
    res.end('Please play or spin');
} else {
    res.end('Slot Machine');
    req.url == '/spin' 
        ? console.log('Spinning...')
        : console.log('Playing...');
    
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});