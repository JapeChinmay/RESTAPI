const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

const Tours = [
  {
    post: "somedata",
    ID: "122",
  },
];

app.get("/api/v1/tours", (req, res) => {
  console.log(Tours);

  return res.status(200).json(Tours);
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);

  return res.status(200).json({ message: "ok" });
  //getting id , in params
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  const newID = Tours.length + 1;
  const newTour = Object.assign({ ID: newID }, req.body);

  Tours.push(newTour);
  console.log(Tours);

  return res.status(200).json({ message: "success" });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  const idNum = req.params.id;
  if (Number(idNum) > Tours.length) {
    return res.status(404).json({ message: "invalid id" });
  } else {
    return res.status(200).json({ message: "ok" });
  }
});

app.listen(3000, () => {
  console.log("listening");
});
