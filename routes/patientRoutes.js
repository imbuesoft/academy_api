const express = require('express');
const patientController = require('../controllers/patientController');
const patientValidator = require('../validators/patientValidator');

const router = express.Router();

router.post('/store', patientValidator.createPatientValidator, patientController.createPatient);
router.get('/getall', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.delete('/:id', patientController.deletePatientById);
router.put('/:id', patientValidator.createPatientValidator, patientController.updatePatientById);


module.exports = router;