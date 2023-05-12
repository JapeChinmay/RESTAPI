const express = require("express");

const getAllUsers = (req, res) => {
  return res.status(500).json({
    status: "error",
    message: " not yet defined",
  });
};

const createUser = (req, res) => {
  return res.status(500).json({
    status: "error",
    message: " not yet defined",
  });
};

const getUserWIthID = (req, res) => {
  return res.status(500).json({
    status: "error",
    message: " not yet defined",
  });
};

const updateUserWithID = (req, res) => {
  return res.status(500).json({
    status: "error",
    message: " not yet defined",
  });
};

const deleteUserWithID = (req, res) => {
  return res.status(500).json({
    status: "error",
    message: " not yet defined",
  });
};

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter
  .route("/:id")
  .get(getUserWIthID)
  .patch(updateUserWithID)
  .delete(deleteUserWithID);

module.exports = userRouter;
