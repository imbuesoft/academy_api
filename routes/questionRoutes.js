// routes/questionRoutes.js

const express = require('express');
const questionController = require('../controllers/questionController');
const { createQuestion, updateQuestion } = require('../validators/questionValidator');

const router = express.Router();

router.post('/', createQuestion, questionController.createQuestion);
router.get('/', questionController.getQuestions);
router.get('/:id', questionController.getQuestionById);
router.put('/:id', updateQuestion, questionController.updateQuestionById);
router.delete('/:id', questionController.deleteQuestionById);

module.exports = router;
