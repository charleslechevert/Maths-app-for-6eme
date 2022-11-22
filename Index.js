require('dotenv').config();


const session = require('express-session');
const express = require("express");
const router = require("./src/router");

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(express.static("public"));

// Configurer le moteur de template
app.set("view engine", "ejs"); // Choisir le view engine
app.set("views", "./src/views"); // Choisir le dossier des views comme étant `views`

app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.locals.playerId = req.session.playerId;
  res.locals.pseudo = req.session.pseudo;
  next();
});

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });