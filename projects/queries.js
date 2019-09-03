const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getTasks,
    getResources,
    getProjectsAndTasks,
    getProjectsAndResources,
    addProject,
    addTask,
    addResource
};


function getProjects() {
    return db('projects');
}

function getTasks() {
    return db('tasks');
}

function getResources() {
    return db('resources');
}

function getProjectsAndTasks() {
    return db.raw('select projectName, projectDescription, taskNotes, taskDescription, taskCompletion, projects.id from tasks join projects on tasks.projectId = projects.id');
}

function getProjectsAndResources() {
    return db('projects');
}

function addProject(item) {
    
    return db("projects")
        .insert(item)
        .then(ids => ({ id: ids[0] }));
}

function addTask(item) {
    return db("tasks")
        .insert(item)
        .then(ids => ({ id: ids[0] }));
}
  
function addResource(item) {
    return db("resources ")
        .insert(item)
        .then(ids => ({ id: ids[0] }));
}