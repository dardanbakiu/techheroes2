const Sequelize = require('sequelize')
const db = require('./db')

const Deposits = db.define('deposit', {
    Anegativ: Sequelize.STRING,
    Apozitiv: Sequelize.STRING,
    Bnegativ: Sequelize.STRING,
    Bpozitiv: Sequelize.STRING,
    ABpozitiv: Sequelize.STRING,
    ABnegativ: Sequelize.STRING,
    Onegativ: Sequelize.STRING,
    Opozitiv: Sequelize.STRING
})

module.exports = Deposits