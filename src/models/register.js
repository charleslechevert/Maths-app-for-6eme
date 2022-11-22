
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Register extends Model {}

Register.init({
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  game_id: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize,
  tableName: 'register'
});

module.exports = Register;