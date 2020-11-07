const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('user', {
    emri: Sequelize.STRING,
    mbiemri: Sequelize.STRING,
    ditelindja: Sequelize.STRING,
    kontakti: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    grgjakut: Sequelize.STRING,
    semundje: Sequelize.STRING,
    tatoo: Sequelize.STRING,
    verified: Sequelize.STRING,
    uuid: Sequelize.STRING
});

module.exports = User