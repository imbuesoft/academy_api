// validators/courseValidator.js

const Joi = require('joi');

exports.createCourse = (req, res, next) => {
  const schema = Joi.object({
    program: Joi.string().required(),
    semester: Joi.string().required(),
    name: Joi.string().required(),
    title: Joi.string().required(),
    thumbnail: Joi.string().required(),
    orderno: Joi.number().required(),
    status: Joi.string().required(),
  });

  validateRequest(req, res, next, schema);
};

exports.updateCourse = (req, res, next) => {
  const schema = Joi.object({
    program: Joi.string(),
    semester: Joi.string(),
    name: Joi.string(),
    title: Joi.string(),
    thumbnail: Joi.string(),
    orderno: Joi.number(),
    status: Joi.string(),
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
