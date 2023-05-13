const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB = process.env.DATABSE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connection);
  });
