// routes/courseRoutes.js

const express = require('express');
const courseController = require('../controllers/courseController');
const { createCourse, updateCourse } = require('../validators/courseValidator');

const router = express.Router();

router.post('/', createCourse, courseController.createCourse);
router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.put('/:id', updateCourse, courseController.updateCourseById);
router.delete('/:id', courseController.deleteCourseById);

module.exports = router;
