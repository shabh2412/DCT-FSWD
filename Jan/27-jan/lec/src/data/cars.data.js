const { v4 } = require("uuid");

let cars = [
  { id: v4(), name: "Supra", year: 2012 },
  { id: v4(), name: "911 GT3 RS", year: 2021 },
  { id: v4(), name: "Cadillac AMG", year: 2018 },
  { id: v4(), name: "Harrier", year: 2017 },
  { id: v4(), name: "Fortuner", year: 2012 },
  { id: v4(), name: "Endavour", year: 2017 },
  { id: v4(), name: "Supra", year: 1999 },
  { id: v4(), name: "Harrier", year: 2020 },
];

module.exports = cars;