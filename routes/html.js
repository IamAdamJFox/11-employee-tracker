const express = require('express');
const path = require('path');

const routes = express.Router();

// Serve static files from the 'public' directory
routes.use(express.static(path.join(__dirname, '../public')));

// Route for the homepage
routes.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Route for the notes page
routes.get('/notes', (req, res) => {
  res.sendFile('notes.html');
});

module.exports = routes;