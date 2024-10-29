const Agendamento = require('../model/Agendamento');
const crudController = require('./crudController');

exports.createAgendamento = crudController.create(Agendamento);
exports.getAllAgendamentos = crudController.getAll(Agendamento);
exports.getAgendamentoById = crudController.getById(Agendamento);
exports.updatAgendamento = crudController.update(Agendamento);
exports.deleteAgendamento = crudController.delete(Agendamento);