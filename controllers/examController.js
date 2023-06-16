// controllers/examController.js

const Exam = require('../models/exam');

exports.createExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json({ message: 'Exam created successfully', exam });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExamById = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json({ message: 'Exam updated successfully', exam });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExamById = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndRemove(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json({ message: 'Exam deleted successfully', exam });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
