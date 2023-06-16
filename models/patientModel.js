const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    systolic: {
        type: Number,
        required: true,
    },
    diastolic: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    pulse: {
        type: Number,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    respirationRate: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Patient', patientSchema);