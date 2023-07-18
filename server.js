// Necessary imports
const express = require('express');
const htmlRoutes = require('./Routes/html.js');
const apiRoutes = require('./Routes/api.js');

// Set the port for the application
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();


// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});