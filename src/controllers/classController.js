const { renderMenuPage } = require("./menuController");
const { Class } = require("../models");
const { Player } = require("../models");
games = require("../../data/games.json");
const db = require("../database");


const classController = {

  renderMenuPage(req, res) {
    if (req.session.pseudo) {
      res.render("class");
    } else {
      res.redirect('/');
    }
  },
  async renderEnrollPage(req, res) {
    if (req.session.pseudo) {

      const player = await Player.findOne({where : { id : req.session.playerId } })
 
      res.render("enrollclass", { player })
    } else {
      res.redirect('/');
    }
  },
  async renderCreatePage(req, res) {

   


    if (req.session.pseudo) {
      classrooms = await Class.findAll({where : { player_id : req.session.playerId } })
      res.render("createclass", { classrooms })
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

    if (req.body.name.length > 10) {
      res.render('createclass', {
        errorMessage: 'Le nom doit comporter 10 caractères maximum'
      });
      return;
    }

    req.body.player_id =  req.session.playerId

    try {
      const addclass = await Class.create(req.body)
      res.redirect('/createclass')

    } catch (e) {
      console.log(e)
    }

  },
  async enrollClass(req,res) {

    if (req.body.classroom.length != 6) {
      res.render('enrollclass', {
        errorMessage: 'Le code doit comporter 6 caractères!'
      });
      return;
    }

    const classrooms = await Class.findAll()

    if (!classrooms.find(classroom => classroom.code == req.body.classroom)) {
      res.render('enrollclass', {
        errorMessage: "Ce code n'exsite pas!"
      });
      return;
    }

    try {
      const player = await Player.update(req.body,{ where: { id: req.session.playerId}})
      res.redirect('/enrollclass')
    } catch(e) {
      console.log(e)
    }
  },
  async deleteClass(req,res) {
    try {
    const player = await Player.update({classroom: ""},{ where: { id: req.session.playerId}})
    res.redirect('/enrollclass')
  } catch(e) {
    console.log(e)
  }

  },
  async renderClassPage(req,res) {
    if (req.session.playerId == req.params.id) {
      const players = await Player.findAll({where : {classroom : req.params.code}})
      const scores = await db.query(`SELECT register.game_id, register.player_id, player.pseudo, player.fname, MAX(register.score) FROM register INNER JOIN player ON register.player_id = player.id WHERE player.classroom = '${req.params.code}' GROUP BY register.game_id, register.player_id, player.pseudo, player.fname;`);
      res.render('classroom', {players , games, scores: scores[0]})
    } else {
      res.redirect('/');
    }
  }

};

module.exports = classController;
