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


//app listener (this is how the server should start)