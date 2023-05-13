const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  post: {
    type: String,
    required: [true, "must have a post value"],
  },
  ID: {
    type: Number,
    required: [true, "  must have a ID"],
  },
});

const TourModel = mongoose.model("TourModel", tourSchema);
module.exports = TourModel;
