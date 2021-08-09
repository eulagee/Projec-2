const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/type', (req, res) => {
    res.render('type');
});

router.get('/choice', (req, res) => {
    res.render('choice');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;