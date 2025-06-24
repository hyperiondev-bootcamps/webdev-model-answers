// Declare the required modules
const express = require("express");
const fs = require("fs");

// Creating an express app
const app = express();

// Defining the port
const PORT = process.env.PORT || 8000;

// Using express static middleware to serve the static files.
app.use(express.static("public"));

// Utility function to read the file and get the person data.
function readPersonData() {
  const data = fs.readFileSync("person.json");
  return JSON.parse(data);
}

// Root route to display the persons name and welcome message.
app.get("/", (req, res) => {
  const person = readPersonData();
  res.send(`Welcome ${person.name}`);
});

// Using the middleware to handle the 404 error.
app.use((req, res, next) => {
  res
    .status(404)
    .send("Sorry! Can’t find that resource. Please check your URL");
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
