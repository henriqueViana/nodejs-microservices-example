'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    name: { 
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nome é obrigatório'
        }
      } 
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email é obrigatório'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validade: {
        notEmpty: {
          msg: 'Senha é obrigatório'
        }
      }
    },
  }, 
  {
    undescored: true
  })

  Customers.associate = function(models) {
    // associations can be defined here
  };
  return Customers;
};