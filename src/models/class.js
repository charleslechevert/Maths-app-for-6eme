
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Class extends Model {}

Class.init({
  code: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'class'
});

module.exports = Class;