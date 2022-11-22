games = require("../../data/games.json");
const { Register } = require("../models");
const { Sequelize } = require('sequelize');

const gameController = {
    async renderGamePage(req, res) {
    const gameID = req.params.game;
    game = games.find(game => game.id == gameID)

    const score = await Register.findOne({
      where : { game_id : gameID },
      attributes: [Sequelize.fn('max', Sequelize.col('score'))],
      raw: true,
    });

      res.render(`${gameID}`, {gameID, game, score });
    },
    async addRegister(req,res) {
      req.body.player_id = req.session.playerId;
      console.log(req.body)
      try {
        await Register.create(req.body);
        // Si mon level est bien créer, je redirige sur ma page en GET /levels
        
      } catch(e) {
        // @TODO Gestion de notre erreur
        res.redirect('/');
      }


    }

  };
  
  module.exports = gameController;
