const express = require("express");

const userRouter = express.Router();

const userMiddleware = (req, res, next) => {
  console.log(req.baseUrl);
  next();
};

userRouter.use(userMiddleware);

userRouter.get("/", (req, res) => {
  res.send({
    name: "arun",
    age: 21,
  });
});

module.exports = userRouter;