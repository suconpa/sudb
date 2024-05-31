require("dotenv").config({ path: "local.env" });

const express = require("express");
const mongoose = require("mongoose");
const server = express();
const User = require("./Model/User.js");
server.get("/api/user", (req, res) => {
  const newUser1 = new User();
  newUser1.email = "test3@test.com";
  newUser1.name = "sua";
  newUser1.age = 32;
  newUser1
    .save()
    .then((data) => {
      res.json({
        massage: "user created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        massage: "user not created",
      });
    });
});

server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("=====connected to MongoDB=====");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
