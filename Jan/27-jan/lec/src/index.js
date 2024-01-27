// STEPS to creste express server
// 1. import the server package
const express = require("express");

// 2. initalize server app
const app = express();

// 5. Serve the requests
// REST Methods
// GET - READ

// const data = [1, 2, 3, 4, 5];

const cars = [
  { id: 1, name: "Supra", year: 2012 },
  { id: 2, name: "911 GT3 RS", year: 2021 },
  { id: 3, name: "Cadillac AMG", year: 2018 },
  { id: 4, name: "Harrier", year: 2017 },
  { id: 5, name: "Fortuner", year: 2012 },
  { id: 6, name: "Endavour", year: 2017 },
  { id: 7, name: "Supra", year: 1999 },
  { id: 8, name: "Harrier", year: 2020 },
];

// get method - (path + request handler)
app.get("/", (request, response) => {
  // older approach
  // response.write(JSON.stringify(data));
  // response.end();
  // newer approach
  // response.send(data);
  // Query Params => starts with ? key values are separated by &
  // ex: http//localhost:8000/?name=Supra&year=2012
  // const name = request.query?.name;
  // const year = request.query?.year;
  const { name, year } = request.query;
  // console.log(name, year);
  let filteredData = [...cars];

  if (name) {
    filteredData = filteredData.filter(car => car?.name === name);
  }
  if (year) {
    filteredData = filteredData.filter(car => car?.year === parseInt(year));
  }

  // const filteredData = cars?.filter((car) => {
  //   if (name) {
  //     return car?.name === name;
  //   }
  //   if (year) {
  //     const numYear = parseInt(year);
  //     return car?.year === numYear;
  //   }
  //   return true;
  // });
  response.send(filteredData);
});

// Path Params
app.get("/:id", (request, response) => {
  const id = request.params.id;
  // const { id } = request.params;
  // const numId = parseInt(id);
  const numId = +id;
  const filteredProduct = cars?.find(car => car?.id === numId);
  response.send(filteredProduct);
});

// POST - CREATE
// DELETE - DELETE
// PUT - UPDATE
// PATCH - UPDATE

// 3. set the port
const PORT = 8000;

// 4. listen on the port
app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});
