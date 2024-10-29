const Paciente = require('../model/Paciente');
const crudController = require('./crudController');

exports.createPaciente = crudController.create(Paciente);
exports.getAllPacientes = crudController.getAll(Paciente);
exports.getPacienteById = crudController.getById(Paciente);
exports.updatPaciente = crudController.update(Paciente);
exports.deletePaciente = crudController.delete(Paciente);