const mongoose = require("mongoose");
const { CarModel } = require("./cars");
// nodejs driver for using mongo db in node : mongoose

/*
1. Install mongoose
2. Connect to database
3. Create Schema (it is basically the skeleton of the data)
4. Create a model from the schema
5. Query
*/

/**
 * {
 *  id : random unique id,
 *  name: String,
 *  year: Number
 * }
 */

// Step 1: Connecting to mongodb
const connection_uri = `mongodb+srv://rishabhpanesar:rishabhpanesar@cluster0-test.ftlhl3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-test`;

// mongoose.connect(connection_uri, success_callback, failure_callback);
async function connect_to_db() {
  try {
    const connection_satus = await mongoose.connect(connection_uri);
    console.log("connection successful!");

    // const carInstance = new CarModel({ name: "ferrari", year: 2023, price: 2999999 });
    const carInstance = await CarModel.create({
      name: "porsche", year: 2023, price: 2999999
    });
    // carInstance.createdAt = new Date();
    try {
      // const result = await carInstance.save();
      // console.log(`result`);
      // console.log(result);
      // carInstance.createdAt = new Date("2000-09-14");
      // const result_2 = await carInstance.save();
      // console.log('result 2');
      // console.log(result_2);
      const result = await CarModel.find();
      console.log(result);
    } catch (error) {
      console.error(`error occurred while saving`);
      console.error(error?.message);
    }

  } catch (error) {
    console.log("connection failed :(", error);
  }
}

connect_to_db();