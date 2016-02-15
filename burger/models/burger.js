var orm = require('../config/orm.js');

var addOrDevourBurger = {
  addBurger: function(nameInput, cb)
}


var addOrDevourBurger = {
  addBurger: function(nameInput, cb){
    orm.newBurger("addOrDevourBurger", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.devour("addOrDevourBurger", inputId, cb);
  },
  findAll: function(cb) {
    orm.allBurgers("addOrDevourBurger", function(res){
      cb(res);
    });
  }
};

module.exports = addOrDevourBurger;