const fs = require("fs");
const express = require("express");

const app = express();

app.get("/api/v1/tours", (req, res) => {
  const ans = {
    name: "chinmay",
  };
  console.log(ans);
  return res.status(200).json(ans);
});

app.listen(3000, () => {
  console.log("listening");
});
