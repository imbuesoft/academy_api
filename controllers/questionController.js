// controllers/questionController.js

const Question = require('../models/question');

exports.createQuestion = async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: 'Question created successfully', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuestionById = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json({ message: 'Question updated successfully', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuestionById = async (req, res) => {
  try {
    const question = await Question.findByIdAndRemove(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
