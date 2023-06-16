// models/examQuestion.js

const mongoose = require('mongoose');

const examQuestionSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  marks: { type: Number, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const ExamQuestion = mongoose.model('ExamQuestion', examQuestionSchema);

module.exports = ExamQuestion;
