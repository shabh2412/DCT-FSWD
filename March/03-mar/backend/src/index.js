const express = require("express");
const { PORT, MONGODB_URI } = require("./constants");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.router");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

// Connect to DB first then start server
const connectDbAndStartServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
      console.log(`Base URL: http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.log(error?.message);
  }
};

// connectDbAndStartServer();

// Start server first and then connect to DB
const startServerThenConnectDB = () => {
  app.listen(PORT, async () => {
    try {
      console.log(`Server running on port: ${PORT}`);
      console.log(`Base URL: http://127.0.0.1:${PORT}`);
      console.log("connecting to DB now!");
      await mongoose.connect(MONGODB_URI);
      console.log("DB connected!");
    } catch (error) {
      console.log(error?.message);
    }
  });
};

startServerThenConnectDB();