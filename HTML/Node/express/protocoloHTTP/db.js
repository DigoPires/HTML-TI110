//biblioteca sequelize
const sequelize = require('sequelize')

//conexao com o bando de dados 
const sequelize2 = new sequelize('postapp', 'root', '', {
    host:"localhost",
    dialect: 'mysql'
    });

    module.exports = {
        sequelize : sequelize,
        sequelize2 : sequelize2
    }
    