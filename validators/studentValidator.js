// validators/studentValidator.js

const Joi = require('joi');

exports.createStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    enrollment: Joi.string().required(),
    program: Joi.string().required(),
    semester: Joi.string().required(),
    contact: Joi.object({
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
    }).required(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string().required(),
    image: Joi.string().uri(),
    bloodGroup: Joi.string().required(),
    batch: Joi.string().required(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    enrollment: Joi.string(),
    program: Joi.string(),
    semester: Joi.string(),
    contact: Joi.object({
      email: Joi.string().email(),
      phone: Joi.string(),
      address: Joi.string(),
    }),
    dateOfBirth: Joi.date(),
    gender: Joi.string(),
    image: Joi.string().uri(),
    bloodGroup: Joi.string(),
    batch: Joi.string(),
  }).min(1);

  validateRequest(req, res, next, schema);
};

function validateRequest(req, res, next, schema) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return res.status(400).json({ error: errorMessage });
  }

  req.body = value;
  next();
}
