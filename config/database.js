const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('adapta_odonto', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = sequelize;
