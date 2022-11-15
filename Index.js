
const express = require("express");
const router = require("./src/router");

const app = express();

app.use(express.static("public"));

// Configurer le moteur de template
app.set("view engine", "ejs"); // Choisir le view engine
app.set("views", "./src/views"); // Choisir le dossier des views comme étant `views`

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });