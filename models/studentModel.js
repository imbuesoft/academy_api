// models/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enrollment: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
