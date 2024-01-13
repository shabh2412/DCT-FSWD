const fs = require("fs");
// console.log("hi");
// console.log(fs);
const options = {
  encoding: "utf-8",
};
const myFileReaderCallback = (err, data) => {
  if (err) {
    console.log(`err`, err);
  }
  else if (data) {
    console.log(`data`, data);
  }
};

fs.readFile("./data.json", { encoding: "utf-8" }, function (err, data) {
  if (err) {
    console.log(`err`, err);
  }
  else if (data) {
    console.log(`data`, data);
  }
});

fs.readFile("./data2.json", options, myFileReaderCallback);