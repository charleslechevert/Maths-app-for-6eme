games = require("../../data/games.json");
const { Register } = require("../models");
const { Sequelize } = require('sequelize');

const statsController = {
    async renderStatsPage(req, res) {
      if(req.session.pseudo) {
        const registers = await Register.findAll({
          where : { player_id : req.session.playerId},
          attributes: [Sequelize.fn('max', Sequelize.col('score')),'game_id'],
          group: ["game_id"],
          raw: true,
      });
      
        res.render("stats",{registers, games});
      } else {
        res.redirect("/");
      }
    }  
  };
  
  module.exports = statsController;
