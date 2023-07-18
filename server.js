// Necessary imports
const express = require('express');
const htmlRoutes = require('./Routes/html');
const apiRoutes = require('./Routes/api');

// Set the port for the application
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});