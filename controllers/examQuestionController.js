// controllers/examQuestionController.js

const ExamQuestion = require('../models/examQuestion');

exports.createExamQuestion = async (req, res) => {
  try {
    const examQuestion = new ExamQuestion(req.body);
    await examQuestion.save();
    res.status(201).json({ message: 'Exam question created successfully', examQuestion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExamQuestions = async (req, res) => {
  try {
    const examQuestions = await ExamQuestion.find();
    res.json(examQuestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExamQuestionById = async (req, res) => {
  try {
    const examQuestion = await ExamQuestion.findById(req.params.id);
    if (!examQuestion) {
      return res.status(404).json({ error: 'Exam question not found' });
    }
    res.json(examQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExamQuestionById = async (req, res) => {
  try {
    const examQuestion = await ExamQuestion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!examQuestion) {
      return res.status(404).json({ error: 'Exam question not found' });
    }
    res.json({ message: 'Exam question updated successfully', examQuestion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExamQuestionById = async (req, res) => {
  try {
    const examQuestion = await ExamQuestion.findByIdAndRemove(req.params.id);
    if (!examQuestion) {
      return res.status(404).json({ error: 'Exam question not found' });
    }
    res.json({ message: 'Exam question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
