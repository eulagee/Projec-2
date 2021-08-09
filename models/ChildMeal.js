const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChildMeal extends Model {}

ChildMeal.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'child_meal',
});

module.exports = ChildMeal;