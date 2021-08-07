const User = require('./User');
const Meal = require('./Meal');


// each user has many (multiple) meals
User.hasMany(Meal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//each meal belongs to a user 
Meal.belongsTo(User, {
    foreignKey: 'user_id'
});

// Meal.belongsToMany(User, {
//     foreignKey: 'id',
//     unique: false
// });



// User.belongsToMany(Meal, {
//     through: {
//         model: 'id',
//         unique: false,
//     }
// })


module.exports = { User, Meal };