const { UserModel } = require("../models/user.model");

const getUser = async (req, res) => {
  try {
    const result = await UserModel.find();
    res.send(result);
  } catch (error) {
    console.log(`Error while getting data`);
    console.log(error);
    res.status(500);
    res.send({ error: "error during getting data from db" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const userInDb = new UserModel(user);
    await userInDb.save();
    // or
    // const userInDb = UserModel.create(user);
    res.send(userInDb);
  } catch (error) {
    res.send(error?.message);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    // find the user with this ID
    // const result = await UserModel.find().where('name', "Kaustubh").lt("age", 31).gt("age", 1);
    const body = req.body || {};
    const result = await UserModel.findByIdAndUpdate(user_id, { ...body }, {
      returnDocument: "after",
    });
    const saved_res = await result.save();
    res.send(saved_res);
  } catch (error) {
    console.log(error);
    res.send(`error occured`);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await UserModel.findByIdAndDelete(user_id);
    console.log(result);
    if (result) {
      res.status(204);
      res.send({
        message: "Deleted user successfully!"
      });
    }
    else {
      res.status(404);
      res.send({
        message: "Sorrry, user not found!"
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: error?.message });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUserById,
  deleteUserById,
};