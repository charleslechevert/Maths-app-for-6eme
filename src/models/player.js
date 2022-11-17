
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Player extends Model {
  static async findByEmail(email) {
    return this.findOne({
      where: {
        email
      }
    });
  }
}

Player.init({
  fname: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg : 'Le champs prénom ne peut pas être vide'
      },
      len: {
        args: [0, 25],
        msg: '25 caractères maximum'
      }

    },
    // Au moment de renseigner la valeur firstname, je passe dans ma méthode set
    set(value) {
      // trim me permet de retirer les espaces mis en début et fin de ma chaîne de caractère
      // Le `?` me permet dans le cas où la value serait undefined ou null de retourner undefined plutôt que d'exécuter ce qu'il y a après le `?`
      this.setDataValue('fname', value?.trim());
    }
  },
  lname: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg : 'Le champs nom ne peut pas être vide'
      },
      len: {
        args: [0, 25],
        msg: 'le mot de passe ne doit pas comporter plus de 25 caractères'
      }
    },
    set(value) {
      this.setDataValue('lname', value?.trim());
    }
  },
  pseudo: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: {
      args: true,
      message: 'Username must be unique.',
    },
    validate: {
      notEmpty: {
        msg : 'Le champs pseudo ne peut pas être vide'
      },
      len: {
        args: [6, 25],
        msg: 'le pseudo doit comporter 6 caractères min et 25 caractères max'
      }
    },
    set(value) {
      this.setDataValue('pseudo', value?.trim());
    }
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: {
      args: true,
      message: 'Username must be unique.',
    }, 
    validate: {
      isEmail: {
        msg : "Format de l'email incorrect"
      },
      notEmpty: {
        msg : 'Le champs email ne peut pas être vide'
      },
      len: {
        args: [0, 50],
        msg: "l'email ne doit pas comporter plus de 50 caractères"
      }
    },

  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Propriété calculer
  fullname: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.fname} ${this.lname}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullname` value!');
    }
  }
}, {
  sequelize,
  tableName: 'player'
});

module.exports = Player;