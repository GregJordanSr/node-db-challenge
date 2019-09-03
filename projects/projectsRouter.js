const express = require('express');

const queries = require('./queries');

const router = express.Router();

router.get('/projects', (req, res) => {
    return queries
     
      .getProjects()
      .then(project => {
         res.status(200).json(project);
      })
      .catch(err => {
          res.status(500).json({ message: "There was and error retrieving the projects." });
      })
 });
 
 router.get('/tasks', (req, res) => {
     queries
     .getTasks()
     .then((task) => {
         res.status(200).json(task);
     }).catch((err) => {
         res.status(500).json({ message: "there was error retrieving the projects" })
     });
 
 });
 
 router.get('/resources', (req, res) => {
     queries
     .getResources()
     .then((resource) => {
         res.status(200).json(resource);
     }).catch((err) => {
         res.status(500).json({ message: "there was error retrieving the projects" })
     });
 
 });

router.get('/projects-tasks', (req, res) => {
    queries
    .getProjectsAndTasks()
    .then((resource) => {
        for(let i = 0; i < resource.length; i++) {
            if (resource[i].taskCompletion === 0) {
                resource[i].taskCompletion = false;
            } else {
                resource[i].taskCompletion =true;
            }
        }
        res.status(200).json(resource);
    }).catch((err) => {
        res.status(500).json({ message: "there was error retrieving the projects" })
    });
})




 router.post('/projects', (req, res) => {
    const body = req.body;
    queries
        .addProject(body)
        .then((add) => {
            res.status(201).json(add);
        }).catch((err) => {
            res.status(500).json({ message: "There was an error adding a project" })
        });
});

router.post('/resources', (req, res) => {
    const body = req.body;
    queries
        .addResource(body)
        .then((add) => {
            res.status(201).json(add);
        }).catch((err) => {
            res.status(500).json({ message: "There was an error adding a resource" })
        });
});

router.post('/task', (req, res) => {
    const body = req.body;
    queries
        .addTask(body)
        .then((add) => {
            res.status(201).json(add);
        }).catch((err) => {
            res.status(500).json({ message: "There was an error adding a task" })
        });
});


module.exports = router;