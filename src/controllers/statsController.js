games = require("../../data/games.json");
const { Register } = require("../models");
const { Sequelize } = require('sequelize');

const statsController = {
    async renderStatsPage(req, res) {
      if(req.session.pseudo) {
        const registers = await Register.findAll({
          attributes: [Sequelize.fn('max', Sequelize.col('score')),'game_id'],
          group: ["game_id"],
          raw: true,
      });
      console.log(registers.find(register => register.game_id == games[0].id))
        res.render("stats",{registers, games});
      } else {
        res.redirect("/");
      }
    }  
  };
  
  module.exports = statsController;
