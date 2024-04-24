const router = require('express').Router();
const {getMovies, uploadMovie, updateMovie, removeMovie, createMovie} = require('../controller/movie.controller.js');
const multer = require('../middleware/multer.js');


router.get('/', getMovies);
router.patch('/:id', multer, uploadMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', removeMovie);

module.exports = router;