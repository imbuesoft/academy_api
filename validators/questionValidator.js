// validators/questionValidator.js

const Joi = require('joi');

exports.createQuestion = (req, res, next) => {
  const schema = Joi.object({
    programId: Joi.string().required(),
    semesterId: Joi.string().required(),
    courseId: Joi.string().required(),
    unit: Joi.number().required(),
    question: Joi.string().required(),
    note: Joi.string(),
    option_a: Joi.string().required(),
    option_b: Joi.string().required(),
    option_c: Joi.string().required(),
    option_d: Joi.string().required(),
    answer: Joi.string().required(),
    group_id: Joi.number().required(),
    section_id: Joi.number().required(),
    per_question_marks: Joi.number().required(),
    level: Joi.string().valid('easy', 'medium', 'hard').required(),
    status: Joi.string().required(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateQuestion = (req, res, next) => {
  const schema = Joi.object({
    programId: Joi.string(),
    semesterId: Joi.string(),
    courseId: Joi.string(),
    unit: Joi.number(),
    question: Joi.string(),
    note: Joi.string(),
    option_a: Joi.string(),
    option_b: Joi.string(),
    option_c: Joi.string(),
    option_d: Joi.string(),
    answer: Joi.string(),
    group_id: Joi.number(),
    section_id: Joi.number(),
    per_question_marks: Joi.number(),
    level: Joi.string().valid('easy', 'medium', 'hard'),
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
