const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

// Protected routes
router.get('/profile', userController.getUserProfile);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userValidator.updateUser, userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
