
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const routes = require("./routes");

// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3001;

//server variable
const app = express()

// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true }))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nasanewsmern";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start listening 
app.listen(PORT, function () {
console.log(`Listening at http://localhost:${PORT}`)
})
