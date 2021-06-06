const express = require("express");
const app = express();
const port = 9000;
const hbs = require("hbs");
const path = require("path");
const mongoose = require('mongoose')

// const staticPath = path.join(__dirname, "../public");

// app.use(express.static(staticPath));

const partialsPath = path.join(__dirname, "../views/partials");

app.set('view engine', "hbs");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  var menu = ['Employee', 'Admin']
  res.render('index', {menu});
});

app.get("/employee", (req, res) => {
  var menu = ['Employee']
  res.render('index', menu);
});


app.get("/admin", (req, res) => {
  var menu = ['Employee', 'Admin']
  res.render('index', menu);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("port 9000");
});
