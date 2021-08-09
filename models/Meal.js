const sequelize = require('../config/connection');
const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('mysql:memory');
// const { Model, Sequelize, DataTypes } = require('sequelize');

/**
 *
 * @type {ModelCtor<Model>}
 */
class meal extends Model {
    static name() {
        return this.name;
    }
}
meal.init({
        name: Sequelize.TEXT,
        has_nuts: Sequelize.BOOL,
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        has_nuts: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,

        },
        has_meat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,

        },
        has_gluten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,

        },
        description: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },

    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal',
        sequelize
    });

// const meal = sequelize.define('meal', {
//    );

module.exports = meal;