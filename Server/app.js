const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("fro mthe middleware");
  next();
});

app.use((req, res, next) => {
  req.time = new Date().toISOString();
  next();
});
//middleware placing matters

const Tours = [
  {
    post: "somedata",
    ID: "122",
  },
];

const getTours = (req, res) => {
  console.log(Tours);

  return res.status(200).json({ time: req.time });
};

const postTours = (req, res) => {
  console.log(req.body);
  const newID = Tours.length + 1;
  const newTour = Object.assign({ ID: newID }, req.body);

  Tours.push(newTour);
  console.log(Tours);

  return res.status(200).json({ message: "success" });
};

const getTourbyID = (req, res) => {
  console.log(req.params);

  return res.status(200).json({ message: "ok" });
  //getting id , in params
};

const patchTour = (req, res) => {
  const idNum = req.params.id;
  if (Number(idNum) > Tours.length) {
    return res.status(404).json({ message: "invalid id" });
  } else {
    return res.status(200).json({ message: "ok" });
  }
};

const deleteTour = (req, res) => {
  const idNum = req.params.id;
  if (Number(idNum) > Tours.length) {
    return res.status(404).json({ message: "invalid id" });
  } else {
    return res.status(204).json({ message: "NULL" });
  }
};

app.route("/api/v1/tours").get(getTours).post(postTours);
app
  .route("/api/v1/tours/:id")
  .get(getTourbyID)
  .patch(patchTour)
  .delete(deleteTour);

//app.get("/api/v1/tours", getTours);

// /app.get("/api/v1/tours/:id", getTourbyID);

//app.post("/api/v1/tours", postTours);

//app.patch("/api/v1/tours/:id", patchTour);

//app.delete("/api/v1/tours/:id", deleteTour);

app.listen(3000, () => {
  console.log("listening");
});
