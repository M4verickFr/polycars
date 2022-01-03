//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/cars');

//CREATE
router.post("/polycars", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/polycars", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/polycars/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/polycars/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/polycars/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/polycars/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/polycars/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;