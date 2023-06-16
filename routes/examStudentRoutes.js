const express = require('express');
const router = express.Router();
const examStudentController = require('../controllers/examStudentController');
const examStudentValidator = require('../validators/examStudentValidator');

router.post('/', examStudentValidator.createExamStudent, examStudentController.createExamStudent);
router.get('/', examStudentController.getExamStudents);
router.get('/:id', examStudentController.getExamStudentById);
router.put('/:id', examStudentValidator.updateExamStudent, examStudentController.updateExamStudentById);
router.delete('/:id', examStudentController.deleteExamStudentById);

module.exports = router;
