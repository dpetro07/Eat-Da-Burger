var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port      : 3306,
  user     : 'root',
  password : '',
  database : 'burgers_db'
});
 
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });
 
// connection.end();

module.exports = connection;