var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://localhost/node-todo'
  }

}
