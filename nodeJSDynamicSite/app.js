'use strict'
// Problem: need a simple way to view user's badge count and JavaScript points
// Solution: use Node.js to perform the profile lookups and serve our template via HTTP

// 1. Create a web server
// 2. Handle HTTP route GET / and POST / i.e. Home
// 3. Handle HTTP route GET /username i.e. /chalkers
// 4. Function that handles the reading of files and merge in values

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('Hello! \n')
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
