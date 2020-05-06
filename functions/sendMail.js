const nodemailer = require("nodemailer");
require("dotenv").config();

function sendMail(request) {
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
    subject: "Request from " + request.name,
    text: "It works",
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.send("Error Occured: ", err);
    } else {
      res.send("Email send!");
    }
  });
}

module.exports = sendMail;
