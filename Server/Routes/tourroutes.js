const express = require("express");

const tourCOntroller = require("../Controllers/tourCOntroller");

const tourROuter = express.Router();

tourROuter.param("id", tourCOntroller.checkID);
// param middleware

tourROuter
  .route("/")
  .get(tourCOntroller.getTours)
  .post(tourCOntroller.checkzBody, tourCOntroller.postTours);
tourROuter
  .route("/:id")
  .get(tourCOntroller.getTourbyID)
  .patch(tourCOntroller.patchTour)
  .delete(tourCOntroller.deleteTour);

module.exports = tourROuter;
