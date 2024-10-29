const express = require('express');
const router = express.Router ();

const pacienteController = require('../controller/pacienteController');
const loginController = require('../controller/loginController');
const agendamentoController = require('../controller/agendamentoController');

router.post('/pacientes', pacienteController.createPaciente);
router.get('/pacientes', pacienteController.getAllPacientes);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.put('/pacientes/:id', pacienteController.updatPaciente);
router.delete('/pacientes/:id', pacienteController.deletePaciente);

router.post('/logins', loginController.createLogin);
router.get('/logins', loginController.getAllLogins);
router.get('/logins/:id', loginController.getLoginById);
router.put('/logins/:id', loginController.updatLogin);
router.delete('/logins/:id', loginController.deleteLogin);

router.post('/agendamentos', agendamentoController.createAgendamento);
router.get('/agendamentos', agendamentoController.getAllAgendamentos);
router.get('/agendamentos/:id', agendamentoController.getAgendamentoById);
router.put('/agendamentos/:id', agendamentoController.updatAgendamento );
router.delete('/agendamentos/:id', agendamentoController.deleteAgendamento );