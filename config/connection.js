const mysql = require('mysql');

const connections = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: burgers_db
})