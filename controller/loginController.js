const Login = require('../model/Login');
const crudController = require('./crudController');

exports.createLogin = crudController.create(Login);
exports.getAllLogins = crudController.getAll(Login);
exports.getLoginById = crudController.getById(Login);
exports.updatLogin = crudController.update(Login);
exports.deleteLogin = crudController.delete(Login);