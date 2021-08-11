const User = require('./User');
const Meal = require('./Meal');
const Menu = require('./Menu');

// each user has many (multiple) meals
Menu.hasMany(Meal, {
  foreignKey: 'menu_id',
});

//each meal belongs to a user
Meal.belongsTo(Menu, {
  foreignKey: 'menu_id',
});

// Category.hasMany(Meal, {
//   foreignKey: 'category_id',
// });

// Meal.belongsTo(Category, {
//   foreignKey: 'category_id',
// });

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

module.exports = { User, Meal, Menu };
