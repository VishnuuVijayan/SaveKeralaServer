const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: { type: String, trim: true, required: true },
    last_name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    locality: { type: String, trim: true },
    contact: { type: Number, trim: true },
    address: { type: String, trim: true },
    skills: { type: String, trim: true },
    dept: { type: String, trim: true },
    bg: { type: String, trim: true },
    readytovolunteer: { type: Boolean }
  },
  {
    timestamps: true
  }
);

const users_list = mongoose.model("users", userSchema);

module.exports = users_list;
