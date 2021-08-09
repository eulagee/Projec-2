const router = require('express').Router();
const { Meal, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all meals for homepage
// GET /api/meal

router.get('/', async (req, res) => {
  try {
    const mealData = await Meal.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const meals = mealData.map((meal) => meal.get({ plain: true }));

    res.render('homepage', {
      meals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/test', async (req, res) => {
  try {
    const mealData = await Meal.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const meals = mealData.map((meal) => meal.get({ plain: true }));

    res.json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/meal/:id
router.get('/meal/:id', async (req, res) => {
  try {
    const mealData = await Meal.findByPk(req.params.id, {
     include: [
        {
          model: User,
          attributes: ['name', 'description'],
        },
      ],
    });

    const meal = mealData.get({ plain: true });

    res.render('project', {
      ...meal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
//// GET /api/meal/meal
router.get('/meal', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/meal/login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/meal');
    return;
  }

  res.render('login');
});

module.exports = router;
