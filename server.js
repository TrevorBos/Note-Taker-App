// Grabbing the express stuff to setup the server
const express = require('express');

// app variable for using express
const app = express();

//create the port
const port = process.env.PORT || 3001;

//create the routes for files in the public folder
app.use(express.static('public'));

//Handle data parsing, middleware and req.body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Route to the files
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);


//app listener (this is how the server should start)
app.listen(port, () => {
    console.log(`Server can be found at localhost${port}`);
  });

// deployed at - https://sheltered-anchorage-77895.herokuapp.com/