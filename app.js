var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());  //mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Connected to DB'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
setupController(app);
apiController(app);

app.listen(port);
