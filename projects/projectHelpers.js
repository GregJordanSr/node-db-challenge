const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getTask,
    getResources,
    addProject,
    addTask,
    addResource
};

function getProjects() {
    return db('projects');
};

function getTask() {
    return db('task');
};

function getResources() {
    return db('resources');
};

function addProject(item) {
    
    return db("projects ")
      .insert(item)
      .then(ids => ({ id: ids[0] }));
  }

  function addTask(item) {
    return db("task ")
      .insert(item)
      .then(ids => ({ id: ids[0] }));
  }
  
  function addResource(item) {
    return db("resources ")
      .insert(item)
      .then(ids => ({ id: ids[0] }));
  }

//   function delete(id) {

//   }