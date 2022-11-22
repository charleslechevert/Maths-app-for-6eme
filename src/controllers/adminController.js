const { Player } = require("../models");
const bcrypt = require('bcrypt');


const adminController = {
    renderSignupPage(req, res) {
      if(!req.session.pseudo) {
        res.render("signup");
      } else {
        res.redirect('/');
      }
    },

    renderSigninPage(req, res) {
      if(!req.session.pseudo) {
        res.render("signin");
      } else {
        res.redirect('/');
      }
    },
    renderSignOutPage(req, res) {
      if(req.session.pseudo) {
        res.render("signout");
      } else {
        res.redirect('/');
      }
    },

    async addPlayer(req,res,next) {

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
        req.session.playerId = addplayer.id;
        req.session.pseudo = addplayer.pseudo

      } catch(e) { 

      if(e.errors[0]?.message) {
          console.log(e.errors[0].message)
          res.render('signup', {errorMessages : e.errors
          });
      return;
      }  
      
    }
      res.redirect('/')
    },

    async signinPlayer(req,res) {
      const {identifier, password} = req.body;

      console.log(identifier)
      let player = await Player.findByEmail(identifier);
      if(!player) {
        const player = await Player.findOne({
          where: { pseudo: identifier },
        });
      }
      

      if(!(player)) {
        res.render('signin', {
          errorMessage: 'Mauvais identifiant. Veuillez réessayer!'
        });
        return;
    }

        // bcrypt.compare va nous permettre de vérifier si le mot de passe renseigner dans le formulaire correspond à celui de l'utilisateur en BDD. Le mot de passe en BDD est déjà hasher.
        const hasPasswordMatched = await bcrypt.compare(password, player.password);

        if(!hasPasswordMatched) {
          res.render('signin', {
            errorMessage: 'Mauvais identifiant. Veuillez réessayer!'
          });
          return;
        }
        req.session.playerId = player.id;
        req.session.pseudo = player.pseudo
        // 4 - On redirige sur la page d'accueil
        res.redirect('/');

  },
  async signOutPlayer(req,res) {

    req.session.destroy()
    res.redirect('/');

  }
  
  
 

  };
  
  module.exports = adminController;