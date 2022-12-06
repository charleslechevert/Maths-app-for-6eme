
const Player = require("./player");
const Register = require("./register");
const Class = require("./class");

//Player&Register
Player.hasMany(Register, {
  foreignKey: 'player_id',
  as: 'register'
});

Register.belongsTo(Player, {
  foreignKey: {
    name: 'player_id',
    allowNull: false
  },
  as: 'player'
});

//Player&Class
Player.hasMany(Class, {
  foreignKey: 'player_id',
  as: 'class'
});

Class.belongsTo(Player, {
  foreignKey: {
    name: 'player_id',
  },
  as: 'player2'
});





module.exports = {
  Player,
  Register,
  Class
}

