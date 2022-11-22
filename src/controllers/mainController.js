chapters = require("../../data/chapters.json");

const mainController = {
    renderHomePage(req, res) {
      res.render("index",{chapters : chapters});
    }
  };
  
  module.exports = mainController;