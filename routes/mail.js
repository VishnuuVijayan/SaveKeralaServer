const Router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

Router.post("/", (req, res) => {
  // if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
  //   res.send("Please add some request");
  // } else {
  // console.log(req.body);
  const name = req.body.name;
  console.log(name);
  const addMsg = req.body.addMsg;
  console.log(addMsg);
  const contact = req.body.contact;
  console.log(contact);
  const latitude = req.body.latitude;
  console.log(latitude);
  const longitude = req.body.longitude;
  console.log(longitude);
  const disaster = req.body.disaster;
  console.log(disaster);
  const district = req.body.district;
  console.log(district);
  const service = req.body.service;
  console.log(service);

  // console.log(name);
  let msg =
    "<h1>New Emergency Reported</h1><br/>Name: " +
    name +
    "<br/>Contact:" +
    contact +
    "<br/>Location : " +
    latitude +
    "," +
    longitude +
    "<br/>District : " +
    district +
    "<br/>Disaster :" +
    disaster +
    "<br/>Emergency Type :" +
    service +
    "<br/>Additional Message: " +
    addMsg +
    "<br/>";

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  let mailOptions = {
    from: "savekeralaproject@gmail.com",
    to: "savekeralaproject@gmail.com",
    subject: "Request from " + name,
    html: msg
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.status(400).send({ msg: "Error Occured: ", err });
    } else {
      res.json("Email Sent");
    }
  });
  // }
});

module.exports = Router;
