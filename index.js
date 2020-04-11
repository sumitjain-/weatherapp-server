const express = require('express');

const PORT = process.env.PORT || 7070;

const server = express();

server.use('/health', (req, res) => {
  res.send('Weatherapp healthy!');
});

server.use('*', (req, res) => {
  res.send('Weatherapp OK!');
});

server.listen(PORT, () => {
  console.log(`${new Date().toString()}: listening on ${PORT}`);
});