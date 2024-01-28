const express = require("express");
const { v4 } = require("uuid"); // destructuring
const { carsByPathParams, addNewCar, deleteCarById, getCars } = require("../controllers/cars.controllers");


const carsRouter = express.Router();

// get method - (path + request handler)
carsRouter.get("/", getCars);

// Path Params
carsRouter.get("/:id", carsByPathParams);

// POST - CREATE
carsRouter.post("/", addNewCar);
// DELETE - DELETE
carsRouter.delete("/:id", deleteCarById);


module.exports = { carsRouter };