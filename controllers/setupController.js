var Todos = require('../models/todoModel');

module.exports = function(app) {

app.get('/api/setupTodos', function(req, res){
  //seed databse
  var startTodos = [
    {
      username:'test',
      todo: 'Make app',
      isDone: false,
      hasAttachment: false
    },
    {
      username:'test',
      todo: 'Buy Milk',
      isDone: false,
      hasAttachment: false
    },
    {
      username:'test',
      todo: 'Learn node',
      isDone: false,
      hasAttachment: false
    }

  ];
  Todos.create(startTodos, function(err, results) {
    res.send(results);
  });
});

};
