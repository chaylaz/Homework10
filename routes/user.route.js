const router = require('express').Router();
const {getUsers, uploadUser, updateUser, removeUser, createUser} = require('../controller/user.controller.js');

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

module.exports = router;