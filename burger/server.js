var express = require('express');
var expressHandlebars = require('express-handlebars');
var connect        = require('connect');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app               = express();

var PORT = process.env.PORT || 8000;












app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});