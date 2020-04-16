const Router = require("express").Router();
let Collector_list = require("../models/collectorlist.model");

// Router.route("/add").post((req, res) => {
//   const district = req.body.district;
//   const user_id = req.body.user_id;
//   const email = req.body.email;
//   const contact = Number(req.body.contact);
//   const collector_fname = req.body.collector_fname;
//   const collector_lname = req.body.collector_lname;
//   const experience = req.body.experience;

//   const newCollector_list = new Secretary({
//     district,
//     panchayat,
//     secratary_name,
//     email,
//     contact
//   });

//   newCollector_list
//     .save()
//     .then(() => res.json("Collector Added"))
//     .catch(() => res.status(400).json("Error: " + err));
// });

Router.route("/").get((req, res) => {
  Collector_list.find()
    .then(collector_lists => res.json(collector_lists))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/:district").get((req, res) => {
  const query = { district: req.params.district };
  Collector_list.find(query)
    .then(collector_lists => res.json(collector_lists))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/update/:id").post((req, res, err) => {
  Collector_list.findById(req.params.id)
    .then(collector_list => {
      // const user_id = Number(req.body.user_id);
      collector_list.email = req.body.email;
      collector_list.contact = Number(req.body.contact);
      collector_list.collector_fname = req.body.collector_fname;
      collector_list.collector_lname = req.body.collector_lname;
      collector_list.district = req.body.district;
      // const experience = Number(req.body.experience);

      collector_list
        .save()
        .then(() => res.json("Collector Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error:" + err));
});

Router.route("/update/:id").post((req, res, err) => {
  Collector_list.findById(req.params.id)
    .then(collector_list => {
      collector_list.collector_fname = req.body.collector_fname;
      collector_list.collector_lname = req.body.collector_lname;
      collector_list.contact = req.body.contact;
      collector_list.email = req.body.email;
      collector_list.district = req.body.district;
      collector_list
        .save()
        .then(() => res.json("Collector Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = Router;
