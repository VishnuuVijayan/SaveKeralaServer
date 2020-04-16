const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tahsildar_listSchema = new Schema(
  {
    // user_id: { type: Number, required: true, trim: true },
    district: { type: String, trim: true },
    t_fname: { type: String, trim: true },
    t_lname: { type: String, trim: true },
    contact: { type: Number, trim: true },
    // email: { type: String, trim: true },
    taluk: { type: String, trim: true }
    // experience: { type: Number, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Tahsildar_list = mongoose.model("Tahsildar_list", tahsildar_listSchema);

module.exports = Tahsildar_list;
