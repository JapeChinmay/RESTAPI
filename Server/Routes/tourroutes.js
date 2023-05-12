const express = require("express");

const Tours = [
  {
    post: "somedata",
    ID: "122",
  },
];

const tourROuter = express.Router();

const getTours = (req, res) => {
  const ans = {
    tours: Tours,
  };

  return res.status(200).json(ans);
};

const postTours = (req, res) => {
  const newID = Tours.length + 1;
  req.body.ID = newID;
  Tours.push(req.body);

  return res.status(200).json({ message: "ok" });
};

const patchTour = (req, res) => {
  const item = Tours.find((id) => id === req.body.ID);
  if (item) {
    item = { ...item, post: req.body };
  }

  return res.status(200).json(ans);
};

const deleteTour = (req, res) => {
  return res.status(200).json({ message: "null" });
};

const getTourbyID = (req, res) => {
  const item = Tours.find((id) => id === req.body.ID);
  if (item) {
    return res.status(200).json(item);
  } else {
    return res.status(404).json({ message: "not found" });
  }
};

tourROuter.route("/").get(getTours).post(postTours);
tourROuter.route("/:id").get(getTourbyID).patch(patchTour).delete(deleteTour);

module.exports = tourROuter;
