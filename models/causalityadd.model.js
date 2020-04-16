const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const causalitySchema = new Schema(
  {
    location: { type: String, required: true, trim: true },
    urgency: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    service_required: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Causality = mongoose.model("Causality", causalitySchema);

module.exports = Causality;
