const Router = require("express").Router();
let Secretary = require("../models/secretaryadd.model");

Router.route("/add").post((req, res) => {
  const district = req.body.district;
  const panchayat = req.body.panchayat;
  const secratary_name = req.body.secratary_name;
  const email = req.body.email;
  const contact = Number(req.body.contact);

  const newSecretary = new Secretary({
    district,
    panchayat,
    secratary_name,
    email,
    contact
  });

  newSecretary
    .save()
    .then(() => res.json("Causality Added"))
    .catch(() => res.status(400).json("Error: " + err));
});

module.exports = Router;
