var connection = require('./connection.js');


var orm = {
  newBurger: function(tableInput, nameInput, cb) { 
    var s = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(s, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  devoured: function(tableInput, idInput, cb) {
    var s = "UPDATE " + tableInput + " SET devoured = 1  WHERE burger_name = ?";
    connection.query(s, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  allBurgers: function(cb) {
    var s = 'SELECT * FROM burgers';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}

    
module.exports = orm;