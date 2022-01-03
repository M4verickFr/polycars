function createCars(req, res) {
    let Cars = require('../models/cars');
    let newCars = Cars ({
        title: req.body.title,
        description : req.body.description,
        image: req.body.image
    });
  
    newCars.save()
    .then((savedCars) => {

        //send back the created Cars
        res.json(savedCars);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCarss(req, res) {

    let Cars = require("../models/cars");

    Cars.find({})
    .then((carss) => {
        res.status(200).json(carss);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCars(req, res) {

    let Cars = require("../models/cars");

    Cars.findById({_id : req.params.id})
    .then((cars) => {
        res.status(200).json(cars);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCars(req, res) {

    let Cars = require("../models/cars");

    Cars.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description,
        image : req.body.image}, 
        {new : true})
    .then((updatedCars) => {
        res.status(200).json(updatedCars);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCars(req, res) {

    let Cars = require("../models/cars");

    Cars.findOneAndRemove({_id : req.params.id})
    .then((deletedCars) => {
        res.status(200).json(deletedCars);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Cars = require("../models/cars");

    Cars.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedCars) => {
        res.status(200).json(updatedCars);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Cars = require("../models/cars");

    Cars.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedCars) => {
        res.status(200).json(updatedCars);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createCars;
module.exports.reads = readCarss;
module.exports.read = readCars;
module.exports.delete = deleteCars;
module.exports.update = updateCars;
module.exports.done = done;
module.exports.undone = undone;
