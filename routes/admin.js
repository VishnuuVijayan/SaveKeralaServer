const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../middleware/auth");

const secret = process.env.jwtSecret;

let Admin = require("../models/adminlist.model");

Router.post("/", (req, res, err) => {
  const { username, password } = req.body;

  console.log(username);

  Admin.findOne({ username }).then((admin) => {
    console.log(admin);
    if (!admin) return res.status(400).json({ msg: "Admin Does not Exist" });
    console.log(password);

    bcrypt.compare(password, admin.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        {
          id: admin.id
          // first_name: user.first_name,
          // last_name: user.last_name
        },
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            admin: {
              // last_name: user.first_name,
              // last_name: user.last_name,
              username: admin.username,
              id: admin._id
            }
          });
        }
      );
    });
  });
});

Router.route("/add").post((req, res, err) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ msg: "Please fill all the fields" });

  Admin.findOne({ username }).then((admin) => {
    if (admin) return res.status(400).json({ msg: "Admin Already exists" });
  });

  const newAdmin = new Admin({
    username,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin.save().then((admin) => {
        jwt.sign(
          {
            id: admin.id
          },
          process.env.jwtSecret,
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              admin: {
                username: admin.username,
                id: admin._id
              }
            });
          }
        );
      });
    });
  });

  // newAdmin
  //   .save()
  //   .then(() => res.json("User Added"))
  //   .catch(() => res.status(400).json("Error: " + err));
});

Router.get("/view", auth, (req, res, err) => {
  Admin.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = Router;
