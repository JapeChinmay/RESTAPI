const express = require("express");

const userController = require("../Controllers/userController");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route("/:id")
  .get(userController.getUserWIthID)
  .patch(userController.updateUserWithID)
  .delete(userController.deleteUserWithID);

module.exports = userRouter;
