var tasks = [
  {id:1,name:'Watch a movie',isCompleted:false},
  {id:2,name:'Fix a bug',isCompleted:true},
  {id:3,name:'Learn Javascript',isCompleted:false},
];

function addTask(){
  var newTask = {
    id : tasks.reduce(function(result,task){
      return task.id > result ? task.id : result;
    },0) +1,
    name : taskName,
    isCompleted:false
  };
  tasks.push(newTask);
  return newTask;
}

function getList(){
    return tasks.slice(0);
}

function toggleTask(){
  var taskId = parseInt(id,10);
  var taskToToggle = tasks.filter(function(task){
    return task.id === taskId;
  })[0];
  if(taskToToggle){
    taskToToggle.isCompleted = !taskToToggle.isCompleted;
  }
  return taskToToggle;
}

function removeCompletedTask(taskId){
  var taskToRemove = tasks.filter(function(task){
    return task.id === taskId;
  })[0];
  var temp = taskToRemove;
  var index = tasks.indexOf(taskToRemove);
  if(taskToRemove.isCompleted)
      tasks.splice(index,1);
  return temp;
}

module.exports = {addTask:addTask,getList:getList,toggleTask:toggleTask,removeCompletedTask:removeCompletedTask};
