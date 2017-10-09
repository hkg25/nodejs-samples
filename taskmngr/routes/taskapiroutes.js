var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
  var viewModal = {
    taskList : taskService.getList()
  };
  res.json(viewModal);
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new');
});

router.post('/new', function(req, res, next) {
  var newtask = taskService.addTask(req.body.newTaskName);
  res.json(newtask);
});

router.get('/toggle/:id', function(req, res, next) {
  var toggledtask = taskService.toggleTask(req.params.id);
  res.json(toggledtask);
});

router.get('/remove/:id', function(req, res, next) {
  var taskId = parseInt(req.params.id,10);
  var removedTask = taskService.removeCompletedTask(taskId);
  res.json(removedTask);
});

module.exports = router;
