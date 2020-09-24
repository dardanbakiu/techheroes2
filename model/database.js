const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "remotemysql.com",
    user: "oTg2eiIlt6",
    database: "oTg2eiIlt6",
    password: "QVJDGVRcjQ"

});

module.exports = pool.promise();