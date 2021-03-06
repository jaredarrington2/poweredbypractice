var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var path = require("path");
// var models = require('./models');
// models.sequelize.sync();

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
