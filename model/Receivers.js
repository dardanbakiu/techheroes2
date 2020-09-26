const Sequelize = require('sequelize')
const db = require('./db')

const Receivers = db.define('receiver', {
    emri: Sequelize.STRING,
    mbiemri: Sequelize.STRING,
    grgjakut: Sequelize.STRING,
    sasia: Sequelize.INTEGER
});

module.exports = Receivers