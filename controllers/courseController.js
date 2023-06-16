// controllers/courseController.js

const Course = require('../models/course');

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourseById = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course updated successfully', course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findByIdAndRemove(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully', course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
