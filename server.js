// Setup empty JS object to act as endpoint for all routes
let projectData = {};
const PORT = 9000;

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const cors = require("cors");
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Spin up the server
app.listen(PORT, () => {
  console.log(`Server Listening On Port ${PORT}`);
});

// Initialize all route with a callback function

// GET Route '/all'
app.get("/all", (req, res) => {
  res.status(200).send(projectData);
  projectData = {};
  res.end();
});

// POST Route '/weatherdata'
app.post("/weatherdata", (req, res) => {
  projectData = {
    temperature: req.body.temp,
    date: req.body.date,
    userResponse: req.body.feelings,
  };
  console.log("projectData Updated Successfully");
  console.log(projectData);
  res.end();
});
