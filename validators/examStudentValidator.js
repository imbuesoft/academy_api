const Joi = require('joi');

// Validation schema for creating an exam student
const createExamStudent = Joi.object({
  examId: Joi.string().required(),
  studentId: Joi.string().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  isAttend: Joi.boolean(),
  remainingTime: Joi.string(),
  nodeNumber: Joi.string(),
  result: Joi.string(),
  ipAddress: Joi.string(),
  studentStatus: Joi.number(),
  isAgree: Joi.boolean(),
  status: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

// Validation schema for updating an exam student
const updateExamStudent = Joi.object({
  startTime: Joi.date(),
  endTime: Joi.date(),
  isAttend: Joi.boolean(),
  remainingTime: Joi.string(),
  nodeNumber: Joi.string(),
  result: Joi.string(),
  ipAddress: Joi.string(),
  studentStatus: Joi.number(),
  isAgree: Joi.boolean(),
  status: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

module.exports = {
  createExamStudent,
  updateExamStudent,
};
