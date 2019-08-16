const express = require('express');

const helper = require('./projectHelpers.js');

const router = express.Router();


router.get('/', (req, res) => {
    
   return helper
    
     .getProjects()
     .then(project => {
        res.status(200).json(project);
     })
     .catch(err => {
         res.status(500).json({ message: "There was and error retrieving the projects." });
     })
});

router.get('/task', (req, res) => {
    helper
    .getTask()
    .then((task) => {
        res.status(200).json(task);
    }).catch((err) => {
        res.status(500).json({ message: "there was error retrieving the projects" })
    });

});

router.get('/resources', (req, res) => {
    helper
    .getResources()
    .then((resource) => {
        res.status(200).json(resource);
    }).catch((err) => {
        res.status(500).json({ message: "there was error retrieving the projects" })
    });

});

// router.post('/', (req, res) => {

// });

// router.post('/:id', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });


module.exports = router;