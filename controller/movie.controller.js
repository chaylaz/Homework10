const {findAll, upload, remove, update, create} = require('../model/movie.model.js');

async function getMovies(req, res) {
    try {
        const movie = await findAll()
        res.status(200).json(movie.rows);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function uploadMovie(req, res) {
    try {
        const photo = await upload(req.params.id, req.file);
        res.status(200).json(message.success(photo));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function createMovie(req, res) {
    const { title, genres, year}=req.body;
    try {
        const movie = await create(title, genres, year);
        res.status(200).json(message.success(movie));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updateMovie(req, res){
    try {
        const movie = await update(req.params.id, req.body.title, req.body.genres, req.body.year);
        res.status(200).json(message.success(movie));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function removeMovie(req, res){
    try {
        const movie = await remove(req.params.id);
        res.status(200).json(message.success(movie));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getMovies, uploadMovie, updateMovie, removeMovie, createMovie};