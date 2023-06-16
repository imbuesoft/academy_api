const Joi = require('joi');

exports.createPatientValidator = (req, res, next) => {
    const patientSchema = Joi.object({
        patient: Joi.string().required(),
        userId: Joi.number().required(),
        weight: Joi.number().min(0).max(350).required(),
        height: Joi.number().min(0).max(300).required(),
        systolic: Joi.number().min(0).max(200).required(),
        diastolic: Joi.number().min(0).max(200).required(),
        type: Joi.string().required(),
        pulse: Joi.number().min(0).max(300).required(),
        temperature: Joi.number().min(0).max(50).required(),
        respirationRate: Joi.number().min(0).max(100).required(),
    });

    const { error } = patientSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};