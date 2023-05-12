const express = require("express");

const tourCOntroller = require("../Controllers/tourCOntroller");

const Tours = [
  {
    post: "somedata",
    ID: "122",
  },
];

const tourROuter = express.Router();

tourROuter
  .route("/")
  .get(tourCOntroller.getTours)
  .post(tourCOntroller.postTours);
tourROuter
  .route("/:id")
  .get(tourCOntroller.getTourbyID)
  .patch(tourCOntroller.patchTour)
  .delete(tourCOntroller.deleteTour);

module.exports = tourROuter;
