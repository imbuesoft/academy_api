// models/course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  program: { type: String, required: true },
  semester: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  orderno: { type: Number, required: true },
  status: { type: String, required: true },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
