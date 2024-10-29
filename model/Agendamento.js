const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Agendamento = sequelize.define('Agendamento', {

    id_agendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paciente',
            key: 'id_paciente',
        },
        allowNull: false,
    },
    dt_agendendamento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hr_agendamento: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    tratamento: {
       type: DataTypes.STRING(255),
       allowNull: false, 
    },
    status: {
        type: DataTypes.ENUM('confirmado', 'cancelado', 'concluido'),
        allowNull: false,
    }
});