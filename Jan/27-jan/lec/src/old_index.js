// STEPS to creste express server
// 1. import the server package
const express = require("express");
const uuid = require("uuid");
const { v4 } = require("uuid"); // destructuring

// 2. initalize server app
const app = express();


// 6. Middlewares
const logger_middleware = (req, res, next) => {
  console.log(`received a request at ${new Date().toDateString()}`);
  console.log(req.ip);
  next(); // VVVVVVVVVIP in middleware
};

const auth_middleware = (req, res, next) => {
  const auth_token = req.headers.authorization;
  // console.log(auth_token);
  if (auth_token === "authorized_user") {
    next();
  }
  else {
    res.status(401).send({ error: "You are not authorized" });
  }
};

app.use(logger_middleware);
// app.use(auth_middleware);
app.use(express.json()); // this is a request JSON body parser, which is based on body-parser package. body-parser package is used in case of plain node js backend.

// 5. Serve the requests
// REST Methods
// GET - READ

// const data = [1, 2, 3, 4, 5];

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

// get method - (path + request handler)
app.get("/cars/", (request, response) => {
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
  // response.status(401).send("<h1>You are not authorised</h1>");
});

// Path Params
app.get("/cars/:id", (request, response) => {
  const id = request.params.id;
  // const { id } = request.params;
  // const numId = parseInt(id);
  // const numId = +id;
  // const filteredProduct = cars?.find(car => car?.id === numId);
  const filteredProduct = cars?.find(car => car?.id === id);
  response.send(filteredProduct);
});

// POST - CREATE
app.post("/cars/", (req, res) => {
  console.log(req.body);
  // console.log(typeof req.body);
  const newCarData = req.body;
  // newCarData.id = cars?.length + 1;
  // const lastItemIndex = cars?.length - 1; // getting last index
  // const lastCarItem = cars[lastItemIndex];
  // newCarData.id = lastCarItem?.id + 1;
  // newCarData.id = uuid?.v4();
  newCarData.id = v4();
  cars.push(newCarData);
  res.status(201).send(newCarData);
  // res.send("this is a post method, to add car in the list");
});
// DELETE - DELETE
app.delete("/cars/:id", (request, response) => {
  const { id } = request.params;
  const filteredData = cars?.filter((car) => car?.id !== id);
  cars = filteredData;
  response.status(200).send({
    deleted: id,
  });
});

// PUT - UPDATE
// PATCH - UPDATE

// 3. set the port
const PORT = 8000;

// 4. listen on the port
app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});
