const Router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

Router.get("/", async (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send("Please add some request");
  } else {
    const {
      name,
      contact,
      latitude,
      longitude,
      district,
      disaster,
      emergency,
    } = await req.body;

    console.log(name);
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
      emergency +
      "<br/>";

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    let mailOptions = {
      from: "vishnu08ptb@gmail.com",
      to: "mailforvishnuu@gmail.com",
      subject: "Request from " + name,
      html: msg,
    };
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.send("Error Occured: ", err);
      } else {
        res.send("Request Send to Admin, You'll be contacted Shortly.");
      }
    });
  }
});

module.exports = Router;
