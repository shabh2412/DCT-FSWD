const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  favSubjects: [String],
  std: Number,
  div: String,
  bestFriend: String,
  contactNo: String
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel
};