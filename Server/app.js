const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const tourROuter = require("./Routes/tourroutes");
const userRouter = require("./Routes/userrouter");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(express.json());

app.use(morgan("dev"));

/////////////////////////////////////////////////////////////////

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("connected ");
  });

////////////////////////////////////////////////////////////////////////////
app.use((req, res, next) => {
  console.log("fro mthe middleware");
  next();
});

app.use((req, res, next) => {
  req.time = new Date().toISOString();
  next();
});

//middleware placing matters

app.use("/api/v1/tours", tourROuter);
app.use("/api/v1/users", userRouter);

///////

//app.get("/api/v1/tours", getTours);

// /app.get("/api/v1/tours/:id", getTourbyID);

//app.post("/api/v1/tours", postTours);

//app.patch("/api/v1/tours/:id", patchTour);

//app.delete("/api/v1/tours/:id", deleteTour);
const port = process.env.PORT;

app.listen(port, () => {
  console.log("listening");
});
