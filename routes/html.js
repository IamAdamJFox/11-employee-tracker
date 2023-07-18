//imports
const express = require('express');
const path = require('path');

const routes = express.Router();
//homepage route
routes.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});
//notes page route
routes.get('/notes', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'notes.html'));
});
//exports
module.exports = routes;