const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');

router.post('/', userValidator.createUser, userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userValidator.updateUser, userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
