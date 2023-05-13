const express = require("express");

const tourCOntroller = require("../Controllers/tourCOntroller");

const tourROuter = express.Router();

// tourROuter.param("id", tourCOntroller.checkID);
// param middleware
console.log("called");
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
