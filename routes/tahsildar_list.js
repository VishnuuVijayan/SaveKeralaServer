const Router = require("express").Router();
let Tahsildar_list = require("../models/tahsildarlist.model");

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
  Tahsildar_list.find({}, { district: 1 })
    .then(tahsildar_list => res.json(tahsildar_list))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/:district").get((req, res) => {
  const query = { district: req.params.district };
  Tahsildar_list.find(query)
    .then(tahsildar_list => res.json(tahsildar_list))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/taluk/:taluk").get((req, res) => {
  const query = { taluk: req.params.taluk };
  Tahsildar_list.find(query)
    .then(tahsildar_list => res.json(tahsildar_list))
    .catch(err => res.status(400).json("Error: " + err));
});

// Router.route("/:taluk").get((req, res) => {
//   const query = { taluk: req.params.taluk };
//   Tahsildar_list.find(query)
//     .then(tahsildar_list => res.json(tahsildar_list))
//     .catch(err => res.status(400).json("Error: " + err));
// });

// Router.route("/update/:id").post((req, res, err) => {
//   Tahsildar_list.findById(req.params.id)
//     .then(tahsildar_list => {
//       // const user_id = Number(req.body.user_id);
//       tahsildar_list.email = req.body.email;
//       tahsildar_list.contact = Number(req.body.contact);
//       tahsildar_list.collector_fname = req.body.collector_fname;
//       tahsildar_list.collector_lname = req.body.collector_lname;
//       tahsildar_list.district = req.body.district;
//       // const experience = Number(req.body.experience);

//       tahsildar_list
//         .save()
//         .then(() => res.json("Collector Updated!"))
//         .catch(err => res.status(400).json("Error : " + err));
//     })
//     .catch(err => res.status(400).json("Error:" + err));
// });

Router.route("/update/:id").post((req, res, err) => {
  Tahsildar_list.findById(req.params.id)
    .then(tahsildar_list => {
      tahsildar_list.t_fname = req.body.t_fname;
      tahsildar_list.t_lname = req.body.t_lname;
      tahsildar_list.contact = req.body.contact;
      tahsildar_list.taluk = req.body.taluk;
      tahsildar_list.district = req.body.district;
      tahsildar_list
        .save()
        .then(() => res.json("Tahsildar Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = Router;
