
const Patient = require('../models/patientModel');

exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePatientById = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePatientById = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};