// STEPS to creste express server
// 1. import the server package
const express = require("express");
const { carsRouter } = require("./routes/cars.router");
const userRouter = require("./routes/user.router");

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

// cars route
app.use("/cars", carsRouter);

// user route
app.use("/user", userRouter);
// PUT - UPDATE
// PATCH - UPDATE

// 3. set the port
const PORT = 8000;

// 4. listen on the port
app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});
