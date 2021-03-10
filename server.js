// Dependencies
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars",exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// Routes
var routes = require('./controllers/burgers_controllers');
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));




