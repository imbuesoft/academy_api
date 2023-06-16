// routes/examRoutes.js

const express = require('express');
const examController = require('../controllers/examController');
const { createExam, updateExam } = require('../validators/examValidator');

const router = express.Router();

router.post('/', createExam, examController.createExam);
router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);
router.put('/:id', updateExam, examController.updateExamById);
router.delete('/:id', examController.deleteExamById);

module.exports = router;
