const {findAll, remove, update, create}=require('../model/user.model.js');

async function getUsers(req, res) {
    try {
        const user = await findAll()
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function createUser(req, res) {
    const {email, gender, password, role}=req.body;
    try {
        const user = await create(email, gender, password, role);
        res.status(200).json(message.success(user));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updateUser(req, res){
    try {
        const user = await update(req.params.id, req.body.email, req.body.gender, req.body.password, req.body.role);
        res.status(200).json(message.success(user));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function removeUser(req, res){
    try {
        const user = await remove(req.params.id);
        res.status(200).json(message.success(user));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getUsers, updateUser, removeUser, createUser};