var connection = require('./connection.js');


var orm = {
  getBurgers: function(tableInput, nameInput, cb) { 
    var s = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(s, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  newBurger: function(tableInput, idInput, cb) {
    var s = "UPDATE " + tableInput + " SET devoured = 1  WHERE id = ?";
    connection.query(s, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  devour: function(tableInput, cb) {
    var s = 'SELECT * FROM ' + tableInput + ';';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}

    
module.exports = orm;