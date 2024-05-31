require("dotenv").config({ path: "local.env" });

const express = require("express");
const mongoose = require("mongoose");
const server = express();
const User = require("./models/User");
server.get("/api/user", (req, res) => {
  const newUser1 = new User();
  newUser.email = "test2@test.com";
  newUser.name = "sua";
  newUser.age = 32;
  newUser
    .save()
    .then((data) => {
      d;
      console.log(data);
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
