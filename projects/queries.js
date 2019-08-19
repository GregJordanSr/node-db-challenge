const db = require('../data/db-config.js');

module.exports = {
    
};


function getProjects() {
    return db('projects');
}

function getTask() {
    return db('tasks');
}

function getResources() {
    return db('resources');
}

function getProjectsAndTasks() {
    return db('projects');
}

function getProjectsAndResources() {
    return db('projects');
}