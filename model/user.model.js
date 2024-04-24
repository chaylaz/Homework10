const pool = require('../config/config.js');

async function findAll() {
    try {
        const {rows} = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        return error.message;
    }
}

async function create (email, gender, password, role) {
    try {
        const {rows} = await pool.query('INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3)', [email, gender, password, role]);
        return rows;
    } catch (error) {
        return error.message;
    }
}

async function update (id, email, gender, password, role) {
    try {
        const {rows} = await pool.query('UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5', [email, gender, password, role, id]);
        return rows;
    }
    catch (error) {
        return error.message;
    }
}

async function remove (id) {
    try {
        const {rows} = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return rows;
    }
    catch (error) {
        return error.message;
    }
}

module.exports = {findAll, create, update, remove};