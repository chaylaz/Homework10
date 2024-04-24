const pool = require('../config/config.js');
async function findAll() {
    try {
        const movie = await pool.query(`SELECT * FROM movies`)
        return movie;
    } catch (error) {
        return error.message;
    }   
}

async function upload(id, data){
    try {
        const movie = await pool.query(`UPDATE movies SET photo = $1 WHERE id = $2`, [data, id]);
        return movie;
    } catch (error) {
        return error.message;
    }
}

async function create (title, genres, year){
    try {
        const movie = await pool.query(`INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)`, [title, genres, year]);
        return movie;
    } catch (error) {
        return error.message;
    }
}

async function update (id, title, genres, year){
    try {
        const movie = await pool.query(`UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4`, [title, genres, year, id]);
        return movie;
    } catch (error) {
        return error.message;
    }
}

async function remove (id) {
    try {
        const movie = await pool.query(`DELETE FROM movies WHERE id = $1`, [id]);
        return movie;
    } catch (error) {
        return error.message;
    }
}

module.exports = {findAll, upload, remove, update, create};