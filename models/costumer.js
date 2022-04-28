'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class costumer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      costumer.hasOne(models.member)
      costumer.hasOne(models.order)
    }
  }
  costumer.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          message: "name can not be empty"
        }
      }
    },
    email: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          message: "address can not be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'costumer',
  });
  return costumer;
};