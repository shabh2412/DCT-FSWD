const express = require("express");
const { UserModel } = require("../models/user.model");
const { getUser, createUser, updateUserById, deleteUserById } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/create", createUser);

// userRouter.patch("/update/:user_id", async (req, res) => {
//   try {
//     const { user_id } = req.params;
//     // find the user with this ID
//     // const result = await UserModel.find().where('name', "Kaustubh").lt("age", 31).gt("age", 1);
//     const result = await UserModel.findOne().where('_id', user_id);
//     console.log('result');
//     console.log(result);
//     if (result !== null) {
//       const body = req.body || {};
//       const keys = Object.keys(body);
//       for (let key of keys) {
//         result[key] = body[key];
//       }
//       const savedResult = await result.save();
//       res.send(savedResult);
//     }
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//     res.send(`error occured`);
//   }
// });

userRouter.patch("/update/:user_id", updateUserById);

// Delete by id

userRouter.delete("/delete/:user_id", deleteUserById);


module.exports = {
  userRouter
};