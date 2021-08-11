const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    meal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
    has_meat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // has_gluten: {
    //   type: DataTypes.BOßOLEAN,
    //   defaultValue: false,
    // },
    description: {
      type: DataTypes.STRING,
    },
    menu_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'menu',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
  }
);

module.exports = Meal;
