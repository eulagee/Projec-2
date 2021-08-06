const User = require('./User');
const Meal = require('./Meal');

User.hasMany(Meal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Meal.belongsTo(User, {
    foreignKey: 'user_id'
});

Meal.belongsToMany(User, {
    through: {
        model: ChildMeal,
        unique: false,
    }
})



User.belongsToMany(Meal, {
    through: {
        model: ChildMeal,
        unique: false,
    }
})


module.exports = { User, Meal };