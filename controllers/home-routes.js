const router = require('express').Router();
const { Menu, Meal } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbMenuData = await Menu.findAll({
      include: [
        {
          model: Meal,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const menus = dbMenuData.map((menu) => menu.get({ plain: true }));
    console.log('menus', menus);
    res.render('homepage', {
      menus,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/meal/:id', async (req, res) => {
  try {
    const dbMealData = await Meal.findByPk(req.params.id);

    const meal = dbMealData.get({ plain: true });
    res.render('meal', { meal, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
