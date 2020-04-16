const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secretarySchema = new Schema(
  {
    district: { type: String, trim: true },
    panchayat: { type: String, trim: true },
    secratary_name: { type: String, trim: true },
    email: { type: String, trim: true },
    contact: { type: Number, trim: true }
  },
  {
    timestamps: true
  }
);

const Secretary = mongoose.model("Secretary", secretarySchema);

module.exports = Secretary;
