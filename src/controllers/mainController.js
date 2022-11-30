chapters = require("../../data/chapters.json");

const mainController = {
    renderHomePage(req, res) {
      res.render("index",{chapters : chapters});
    },
    renderAboutPage(req, res) {
      res.render("about");
    },
    renderCreditPage(req, res) {
      res.render("credit");
    }


  };
  
  module.exports = mainController;