const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const { User } = require('./user-model');

const Token = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Token)
Token.belongsTo(User)

module.exports = Token
