const router = require('express').Router();
const Meal = require('../models/Meal');

// route to get all dishes
router.get('/', async (req, res) => {
  const mealData = await Meal.findAll().catch((err) => {
    res.json(err);
  });
  const meals = mealData.map((meal) => meal.get({ plain: true }));
  res.render('all', { meals });
});

// route to get one dish
router.get('/meal/:id', async (req, res) => {
  try {
    const mealData = await Meal.findByPk(req.params.id);
    if (!mealData) {
      res.status(404).json({ message: 'No dish with this id!' });
      return;
    }
    const meal = mealData.get({ plain: true });
    res.render('meal', meal);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
