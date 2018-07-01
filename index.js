/**
 * index.js
 */
import express from 'express';
import http from 'http';

//  express app setup
const app = express();

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  console.log('Serveris listening on port: 3000');
});

app.get('*', (req, res) => {
  res.end('Hello, Expresssss');


});
