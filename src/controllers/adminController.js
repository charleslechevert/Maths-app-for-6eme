const { Player } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');



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


    renderForgetPwdPage(req,res) {
      res.render('forgetpwd')
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

      if(req.body.password.length < 7) {
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
      var player = await Player.findByEmail(identifier);
      
      if(!player) {
      var player = await Player.findOne({
           pseudo: identifier 
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

  },
  async forgetPwd(req,res) {
    const { email }  = req.body;
    const players = await Player.findAll();

    if (!players.find(player => player.email == email)) {
      res.render('forgetpwd', {errorMessage : 'Adresse email non enregistrée'})
      return;
    }

    const player = await Player.findByEmail(req.body.email);
    const secret = process.env.JWT_SECRET + player.password 
    const payload = {
      email : player.email,
      id : player.id
    }

    const token = jwt.sign(payload, secret, {expiresIn: '15m'})
    const link = `${process.env.URL}/forgetpwd/${player.id}/${token}`
    console.log(link)
    res.render('forgetpwd', {confMessage : 'Un email vous a été envoyé afin de changer votre mot de passe!'})

    //set up of nodemailer in order to send email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'charleslechevert@gmail.com',
        pass: process.env.GOOGLEPWD
      },
      tls: {
        rejectUnauthorized: false
    }
    });

    var mailOptions = {
      from: 'charles.lechevert@gmail.com',
      to: player.email,
      subject: 'Mathack - Réinitialisation du mot de passe',
      text: `${player.pseudo} : Vous pouvez réinitialiser votre mot de passe en cliquant sur le lien suivant : ${process.env.URL}/forgetpwd/${player.id}/${token}.`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    
  },
  async forgetPwdClick(req,res) {
    const { id, token } = req.params

    const players = await Player.findAll();

    if (!players.find(player => player.id == id)) {
      res.render('forgetpwd', {confMessage : 'ID invalide!'})
      return
    }

    const player = await Player.findOne({where: {id : id}});

    const secret = process.env.JWT_SECRET + player.password
    try {
      const payload =jwt.verify(token, secret)
      res.render('resetpwd', {player})
    } catch(error) {
      res.send(error.message)
    }
  },
  async forgetPwdReset(req,res) {

    if(req.body.password !== req.body.passwordConf) {
      res.render('resetpwd', {
        errorMessage: 'Les deux mots de passe sont différents'
      });
      return;
    }

    if(req.body.password.length < 7) {
      res.render('resetpwd', {
        errorMessage: 'Le mot de passe doit comporter 8 caractères minimum'
      });
      return;
    }


    const passwordHashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = passwordHashed;

      try {
        const addplayer = await Player.update({password : req.body.password},{ where: { id: req.params.id } });
        res.render('resetpwd', {
          confMessage: 'Mot de passe modifié'
        });
      } catch(e) { 
      if(e.errors[0]?.message) {
          console.log(e.errors[0].message)
          res.render('resetpwd', {errorMessages : e.errors
          });
      }  

  }

}

}
  
  module.exports = adminController;