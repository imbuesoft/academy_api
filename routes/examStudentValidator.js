const Joi = require('joi');

exports.createExamStudent = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    examId: Joi.string().required(),
    studentId: Joi.string().required(),
    startTime: Joi.date().iso().required(),
    endTime: Joi.date().iso().required(),
    isAttend: Joi.number().valid(0, 1).required(),
    remainingTime: Joi.string().required(),
    nodeNumber: Joi.string().required(),
    result: Joi.string().required(),
    ipAddress: Joi.string().required(),
    studentStatus: Joi.number().valid(0, 1).required(),
    isAgree: Joi.number().valid(0, 1).required(),
    status: Joi.string().valid('Active', 'Inactive').required(),
    created_at: Joi.date().iso().required(),
    updated_at: Joi.date().iso().required(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateExamStudent = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number(),
    examId: Joi.string(),
    studentId: Joi.string(),
    startTime: Joi.date().iso(),
    endTime: Joi.date().iso(),
    isAttend: Joi.number().valid(0, 1),
    remainingTime: Joi.string(),
    nodeNumber: Joi.string(),
    result: Joi.string(),
    ipAddress: Joi.string(),
    studentStatus: Joi.number().valid(0, 1),
    isAgree: Joi.number().valid(0, 1),
    status: Joi.string().valid('Active', 'Inactive'),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
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
