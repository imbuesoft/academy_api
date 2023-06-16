// routes/studentRoutes.js

const express = require('express');
const studentController = require('../controllers/studentController');
const { createStudent, updateStudent } = require('../validators/studentValidator');

const router = express.Router();

router.post('/', createStudent, studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', updateStudent, studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);

module.exports = router;
