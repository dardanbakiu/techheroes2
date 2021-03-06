const Sequelize = require('sequelize');
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPw = process.env.DB_PW
const dbHost = process.env.DB_HOST


const sequelize = new Sequelize(dbName, dbUser, dbPw, {
  host: dbHost,
  dialect: 'mysql'
});

module.exports = sequelize