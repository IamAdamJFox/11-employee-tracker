const routes = require('express').Router();
const fs = require('fs');

routes.get('/api/notes', async (req, res) => {
  try {
    const notesData = await fs.readFile('db/db.json', 'utf8');
    const notes = JSON.parse(notesData);
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = routes;

