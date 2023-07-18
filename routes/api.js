const routes = require('express').Router();
const fs = require('fs');
const uuid = require('../public/assets/js/uuid');

// GET request for retrieving all notes from the internal database
routes.get('/api/notes', (req, res) => {
  try {
    const notesdb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(notesdb);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST request for adding a new note to the internal database
routes.post('/api/notes', (req, res) => {
  try {
    const notesdb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    };
    notesdb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notesdb));
    res.json(notesdb);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = routes;


