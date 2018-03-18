var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  // password: '',
});

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('Mysql Connected!');
});

module.exports = con;