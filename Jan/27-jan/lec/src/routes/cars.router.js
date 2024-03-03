const express = require("express");
const { v4 } = require("uuid"); // destructuring
const { carsByPathParams, addNewCar, deleteCarById, getCars } = require("../controllers/cars.controllers");


const carsRouter = express.Router();

// get method - (path + request handler)
carsRouter.get("/", getCars);

// Path Params - represented by : Example users/:username => users/kaustubh
carsRouter.get("/:id", carsByPathParams);

// Query params - represented by : ? Example /users/?age=21&skill=MERN&dsa_level=expert

// POST - CREATE
carsRouter.post("/", addNewCar);
// DELETE - DELETE
carsRouter.delete("/:id", deleteCarById);


module.exports = { carsRouter };