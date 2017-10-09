var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
  var viewModal = {
    taskList : taskService.getList()
  };
  res.render('tasks/index',viewModal);
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
  taskService.addTask(req.body.newTaskName);
  res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next) {
  taskService.toggleTask(req.params.id);
  res.redirect('/tasks');
});

router.get('/remove/:id', function(req, res, next) {
  var taskId = parseInt(req.params.id,10);
  taskService.removeCompletedTask(taskId);
  res.redirect('/tasks');
});

module.exports = router;
