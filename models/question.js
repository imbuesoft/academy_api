// models/question.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  unit: { type: Number, required: true },
  question: { type: String, required: true },
  note: { type: String },
  option_a: { type: String, required: true },
  option_b: { type: String, required: true },
  option_c: { type: String, required: true },
  option_d: { type: String, required: true },
  answer: { type: String, required: true },
  group_id: { type: Number, required: true },
  section_id: { type: Number, required: true },
  per_question_marks: { type: Number, required: true },
  level: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
