const Sequelize = require('sequelize')
const db = require('./db')

const Donors = db.define('donor', {
    emri: Sequelize.STRING,
    mbiemri: Sequelize.STRING,
    email: Sequelize.STRING,
    grgjakut: Sequelize.STRING,
    kontakti: Sequelize.STRING,
    sasia: Sequelize.INTEGER
})

module.exports = Donors