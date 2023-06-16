// validators/examValidator.js

const Joi = require('joi');

exports.createExam = (req, res, next) => {
  const schema = Joi.object({
    programId: Joi.string().required(),
    semesterId: Joi.string().required(),
    courseId: Joi.string().required(),
    unit: Joi.number().required(),
    name: Joi.string().required(),
    note: Joi.string(),
    timeDuration: Joi.string().required(),
    examDate: Joi.date().required(),
    totalMarks: Joi.string().required(),
    totalQuestion: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    examStatus: Joi.number().required(),
    instantResult: Joi.number().required(),
    isMinusSystem: Joi.number().required(),
    negative_marks: Joi.number().allow(null),
    status: Joi.string().required(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateExam = (req, res, next) => {
  const schema = Joi.object({
    programId: Joi.string(),
    semesterId: Joi.string(),
    courseId: Joi.string(),
    unit: Joi.number(),
    name: Joi.string(),
    note: Joi.string(),
    timeDuration: Joi.string(),
    examDate: Joi.date(),
    totalMarks: Joi.string(),
    totalQuestion: Joi.string(),
    startTime: Joi.string(),
    endTime: Joi.string(),
    examStatus: Joi.number(),
    instantResult: Joi.number(),
    isMinusSystem: Joi.number(),
    negative_marks: Joi.number().allow(null),
    status: Joi.string(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  }).min(1);

  validateRequest(req, res, next, schema);
};

function validateRequest(req, res, next, schema) {
  const { error, value } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return res.status(400).json({ error: errorMessage });
  }

  req.body = value;
  next();
}
