const { v4 } = require("uuid");
const cars = require("../data/cars.data");

const getCars = (request, response) => {
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
};

const carsByPathParams = (request, response) => {
  const id = request.params.id;
  // const { id } = request.params;
  // const numId = parseInt(id);
  // const numId = +id;
  // const filteredProduct = cars?.find(car => car?.id === numId);
  const filteredProduct = cars?.find(car => car?.id === id);
  response.send(filteredProduct);
};

const addNewCar = (req, res) => {
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
};

const deleteCarById = (request, response) => {
  const { id } = request.params;
  const filteredData = cars?.filter((car) => car?.id !== id);
  cars = filteredData;
  response.status(200).send({
    deleted: id,
  });
};

module.exports = {
  getCars,
  carsByPathParams,
  addNewCar,
  deleteCarById
};