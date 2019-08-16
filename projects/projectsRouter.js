const express = require('express');

const helper = require('./projectHelpers.js');

const router = express.Router();


router.get('/', (req, res) => {
    
    helper
    
     .getProjects()
     .then(project => {
        res.status(200).json(project);
     })
     .catch(err => {
         res.status(500).json({ message: "There was and error retrieving the projects." });
     })
});

router.get('/:id/', (req, res) => {
    
    const {id} = req.params;

    helper
    .getShoppingList(id)
    .then((project) => {
        res.status(200).json(project);
    }).catch((err) => {
        res.status(500).json({ message: "there was error retrieving the projects" })
    });

});

// router.get('/', (req, res) => {

// });

// router.post('/', (req, res) => {

// });

// router.post('/:id', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });


module.exports = router;