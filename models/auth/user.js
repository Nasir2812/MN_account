const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db/db')

const userRegister = sequelize.define('UserData', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: true,
        freezeTableName: true
    })

module.exports = userRegister