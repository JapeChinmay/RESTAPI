const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

exports.Connect = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then((con) => {
      console.log("connected ");
    });
};

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
