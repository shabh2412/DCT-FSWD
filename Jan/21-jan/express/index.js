var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json // middleware
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
});

app.listen(3010, ()=>{
  console.log("listening")
});

// controllers, routers, mongodb