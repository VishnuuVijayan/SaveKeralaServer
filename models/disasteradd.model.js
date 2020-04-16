const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const disasterSchema = new Schema(
  {
    disasterid: { type: String, unique: true, trim: true },
    disaster_name: { type: String, unique: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, trim: true },
    location: { type: String, trim: true, required: true },
    disaster_type: { type: String, trim: true, required: true },
    disaster_sdate: { type: Date, required: true },
    disaster_edate: { type: Date },
    duration: { type: Number, maxlength: 3, trim: true },
    severity: { type: Number, maxlength: 2, required: true },
    people_affected: { type: Number, trim: true },
    span_area: { type: Number, trim: true },
    is_active: { type: Boolean, required: true },
    imgsrc: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Disaster = mongoose.model("Disaster", disasterSchema);

module.exports = Disaster;
