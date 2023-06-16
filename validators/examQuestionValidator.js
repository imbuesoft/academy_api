// validators/examQuestionValidator.js

const Joi = require('joi');

exports.createExamQuestion = (req, res, next) => {
  const schema = Joi.object({
    examId: Joi.string().required(),
    questionId: Joi.string().required(),
    status: Joi.string().valid('Active', 'Inactive').required(),
    createdAt: Joi.date().iso().required(),
    updatedAt: Joi.date().iso().required(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateExamQuestion = (req, res, next) => {
  const schema = Joi.object({
    examId: Joi.string(),
    questionId: Joi.string(),
    status: Joi.string().valid('Active', 'Inactive'),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
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
