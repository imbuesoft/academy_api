// routes/examQuestionRoutes.js

const express = require('express');
const router = express.Router();
const examQuestionController = require('../controllers/examQuestionController');
const examQuestionValidator = require('../validators/examQuestionValidator');

router.post('/', examQuestionValidator.createExamQuestion, examQuestionController.createExamQuestion);
router.get('/', examQuestionController.getExamQuestions);
router.get('/:id', examQuestionController.getExamQuestionById);
router.put('/:id', examQuestionValidator.updateExamQuestion, examQuestionController.updateExamQuestionById);
router.delete('/:id', examQuestionController.deleteExamQuestionById);

module.exports = router;
