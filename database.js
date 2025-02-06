const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'crisz2103',
  database: 'crud',
  port: 3333
})

module.exports = connection;
