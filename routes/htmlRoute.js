// Variables used
const path = require('path');

// Routing the app
module.exports = (app) => {
    
  // creating the routes for the application

  // When you use /notes, this should return you to the notes.html file.
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // When you use a *, it should just return the index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};