// Necessary imports
const express = require('express');
const htmlRoutes = require('./routes/html.js');
const apiRoutes = require('./routes/api.js');

// Set the port for the application
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);


// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});