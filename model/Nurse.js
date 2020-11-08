const Sequelize = require('sequelize')
const db = require('./db')

const Nurse = db.define('nurse', {
    emri: Sequelize.STRING,
    emriSpitalit: Sequelize.STRING,
    lokacioniSpitalit: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    verified: Sequelize.STRING,
    uuid: Sequelize.STRING
});

module.exports = Nurse