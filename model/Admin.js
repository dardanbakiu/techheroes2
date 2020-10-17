const Sequelize = require('sequelize')
const db = require('./db')

const Admin = db.define('admin', {
    emri:Sequelize.STRING,
    emriSpitalit: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = Admin