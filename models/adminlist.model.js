const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true }
  },
  {
    timestamps: true
  }
);

const admins_list = mongoose.model("admins", adminSchema);

module.exports = admins_list;
