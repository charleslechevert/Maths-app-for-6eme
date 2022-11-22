
const Player = require("./player");
const Register = require("./register");

// Level
Player.hasMany(Register, {
  foreignKey: 'player_id',
  as: 'register'
});
// Question
Register.belongsTo(Player, {
  foreignKey: {
    name: 'player_id',
    allowNull: false
  },
  as: 'player'
});

module.exports = {
  Player,
  Register
}

