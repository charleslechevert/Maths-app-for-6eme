const { Player } = require("../models");
const bcrypt = require('bcrypt');


const adminController = {
    renderSignupPage(req, res) {
      res.render("signup");
    },
    renderSigninPage(req, res) {
      res.render("signin");
    },
    async addPlayer(req,res) {

      const playerEmail = await Player.findByEmail(req.body.email);
      if(playerEmail) {
        res.render('signup', {
          errorMessage: 'Adresse email déjà existente'
        });
        return;
      }

      const playerPseudo = await Player.findOne({where: {pseudo : req.body.pseudo}});
      if(playerPseudo) {
        res.render('signup', {
          errorMessage: 'Pseudo déjà existant'
        });
        return;
      }

      if(req.body.password < 8) {
        res.render('signup', {
          errorMessage: 'Le mot de passe doit comporter 8 caractères minimum'
        });
        return;
      }

      if(req.body.password !== req.body.confirmPassword) {
        res.render('signup', {
          errorMessage: 'Les deux mots de passe sont différents'
        });
        return;
      }

    // 3 - Hasher le mot de passe
    // Hasher le mot de passe permet de rendre illisible le mot de passe et d'empêcher la récupération de ce dernier. Par contre, il sera toujours possible de le comparer.
    const passwordHashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = passwordHashed;



      try {
        const addplayer = await Player.create(req.body)
        
        // Comme il a créer son compte, on peut automatiquement le logger
        req.session.userId = addplayer.id
      } catch(e) { 

      if(e.errors[0]?.message) {
          console.log(e.errors[0].message)
          res.render('signup', {errorMessages : e.errors
          });
      return;
      }  
      
    }
      res.redirect('/')
    }
  };
  
  module.exports = adminController;