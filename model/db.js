const Sequelize = require('sequelize');

// const sequelize = new Sequelize('HJE75wlGJj', 'HJE75wlGJj', 'QJ3VGCTKXn', {
//   host: 'remotemysql.com',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('dhurogjak', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize