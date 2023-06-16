// models/exam.js

const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  semesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  unit: { type: Number, required: true },
  name: { type: String, required: true },
  note: { type: String },
  timeDuration: { type: String, required: true },
  examDate: { type: Date, required: true },
  totalMarks: { type: String, required: true },
  totalQuestion: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  examStatus: { type: Number, required: true },
  instantResult: { type: Number, required: true },
  isMinusSystem: { type: Number, required: true },
  negative_marks: { type: Number },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
