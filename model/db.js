const Sequelize = require('sequelize');

const sequelize = new Sequelize('HJE75wlGJj', 'HJE75wlGJj', 'QJ3VGCTKXn', {
  host: 'remotemysql.com',
  dialect: 'mysql'
});

module.exports = sequelize