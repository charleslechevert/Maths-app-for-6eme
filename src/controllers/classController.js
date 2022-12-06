const { renderMenuPage } = require("./menuController");
const { Class } = require("../models");


const classController = {

  renderMenuPage(req, res) {
    if (req.session.pseudo) {
      res.render("class");
    } else {
      res.redirect('/');
    }
  },
  renderEnrollPage(req, res) {
    if (req.session.pseudo) {
      res.render("enrollclass")
    } else {
      res.redirect('/');
    }
  },
  renderCreatePage(req, res) {
    if (req.session.pseudo) {
      res.render("createclass")
    } else {
      res.redirect('/');
    }
  },
  async createClass(req, res, next) {

    if (req.body.code.length != 6) {
      res.render('createclass', {
        errorMessage: 'Le code doit comporter 6 caractères'
      });
      return;
    }

    req.body.player_id =  req.session.playerId

    try {
      const addclass = await Class.create(req.body)
      res.render('createclass');

    } catch (e) {
      console.log(e)
    }

  }


};

module.exports = classController;
