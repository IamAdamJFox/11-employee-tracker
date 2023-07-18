const express = require('express');
const path = require('path');

const route = express.Router();
const routes = express.Router();

route.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

routes.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = {
  route,
  routes,
};
