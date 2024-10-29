const { DataTypes } = require('sequelize');
const  sequelize = require('../config/database');

const Login = sequelize.define('Login', {
    id_login: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type:DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull:false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }, 
    tableName: 'login',
    timestamps: false,
     
})

module.exports = Login;