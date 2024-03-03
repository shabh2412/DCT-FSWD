const mongoose = require("mongoose");

// https://mongoosejs.com/docs/api/schematype.html
const carSchema = mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
  },
  year: Number,
  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
  price: {
    type: Number,
    min: 0,
  }
});

const CarModel = mongoose.model("Car", carSchema);

module.exports = { CarModel }; // named export