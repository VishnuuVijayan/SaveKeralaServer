const Router = require("express").Router();
let Causality = require("../models/causalityadd.model");

Router.route("/").get((req, res) => {
  Causality.find()
    .then(causality => res.json(causality))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/add").post((req, res) => {
  const location = req.body.location;
  const urgency = req.body.urgency;
  const type = req.body.type;
  const service_required = req.body.service_required;

  const newCausality = new Causality({
    location,
    urgency,
    type,
    service_required
  });

  newCausality
    .save()
    .then(() => res.json("Causality Added"))
    .catch(() => res.status(400).json("Error: " + err));
});

module.exports = Router;
