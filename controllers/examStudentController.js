const ExamStudent = require('../models/examStudent');

exports.createExamStudent = async (req, res) => {
  try {
    const examStudent = new ExamStudent(req.body);
    await examStudent.save();
    res.status(201).json({ message: 'Exam student created successfully', examStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExamStudents = async (req, res) => {
  try {
    const examStudents = await ExamStudent.find();
    res.json(examStudents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExamStudentById = async (req, res) => {
  try {
    const examStudent = await ExamStudent.findById(req.params.id);
    if (!examStudent) {
      return res.status(404).json({ error: 'Exam student not found' });
    }
    res.json(examStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExamStudentById = async (req, res) => {
  try {
    const examStudent = await ExamStudent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!examStudent) {
      return res.status(404).json({ error: 'Exam student not found' });
    }
    res.json({ message: 'Exam student updated successfully', examStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExamStudentById = async (req, res) => {
  try {
    const examStudent = await ExamStudent.findByIdAndDelete(req.params.id);
    if (!examStudent) {
      return res.status(404).json({ error: 'Exam student not found' });
    }
    res.json({ message: 'Exam student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
