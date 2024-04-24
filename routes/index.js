const router = require('express').Router();
const movie = require('./movie.route.js');
const user = require('./user.route.js');
router.use('/movies', movie);
router.use('/users', user);

module.exports = router;
