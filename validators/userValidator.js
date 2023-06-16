const Joi = require('joi');

exports.createUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().required(),
    email_verified_at: Joi.date().iso().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    pinCode: Joi.string().required(),
    city: Joi.string().required(),
    birthDate: Joi.date().iso().required(),
    image: Joi.string(),
    role: Joi.string().valid('teacher', 'student').required(),
    department: Joi.object({
      department: Joi.string().required(),
      program: Joi.string().required(),
      semester: Joi.string().required(),
    }).required(),
    created_at: Joi.date().iso().required(),
    updated_at: Joi.date().iso().required(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    username: Joi.string(),
    email: Joi.string().email(),
    mobile: Joi.string(),
    email_verified_at: Joi.date().iso(),
    password: Joi.string(),
    address: Joi.string(),
    pinCode: Joi.string(),
    city: Joi.string(),
    birthDate: Joi.date().iso(),
    image: Joi.string(),
    role: Joi.string().valid('teacher', 'student'),
    department: Joi.object({
      department: Joi.string(),
      program: Joi.string(),
      semester: Joi.string(),
    }),
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
