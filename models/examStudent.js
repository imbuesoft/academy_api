const mongoose = require('mongoose');

const examStudentSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  isAttend: {
    type: Boolean,
    default: false
  },
  remainingTime: {
    type: String
  },
  nodeNumber: {
    type: String
  },
  result: {
    type: String
  },
  ipAddress: {
    type: String
  },
  studentStatus: {
    type: Number
  },
  isAgree: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'Active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

const ExamStudent = mongoose.model('ExamStudent', examStudentSchema);

module.exports = ExamStudent;
