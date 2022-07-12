// Initial variables
const { application } = require("express");
const fs = require("fs");
const { request } = require("http");
const path = require("path");

// Going to use an npm package that will allow different IDs to be created for each note that is added.
// We will use VAR here so that the variable can change without issue.
var uniqid = require("uniqid");

// Routing for the application
module.exports = (app) => {
  // get request - should read the db file and return all the notes within as a JSON
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  // POST request - should receive the new note (req.body) and add it to the JSON, then return note to display.
  app.post("/api/notes", (req, res) => {
    let database = fs.readFileSync("db/db.json");
    database = JSON.parse(database);
    res.JSON(database);
    // This should create the body for the note
    let myNote = {
      title: req.body.title,
      text: req.body.text,
      //this is where we will use the npm package uniqid to set a fancy id for each note and hopefully allow for deletion
      id: uniqid(),
    };
    // We then want to push the information to the db.json file
    database.push(myNote);
    fs.writeFileSync("db/db.json", JSON.stringify(database));
    res.json(database);
  });

  // Bonus DELETE request - should receive the id so that it can be removed.
  app.delete("/api/notes", (req, res) => {
    // read the notes
    let database = JSON.parse(fs.readFileSync("db/db.json"));
    // remove the notes via the unique ID given
    let noteDelete = database.filter((item) => item.id !== req.params.id);
    // Rewrite the file
    fs.writeFileSync("db/db.json", JSON.stringify(noteDelete));
    res.json(noteDelete);
  });
};
