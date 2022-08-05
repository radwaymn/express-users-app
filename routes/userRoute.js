const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/userController");
const logId = require("../middleware/logId");

userRoute.get("/", userController.getUsers);

userRoute.get("/:id", logId, userController.getUserById);

userRoute.get("/:id/tasks", logId, userController.getUserTasks);

module.exports = userRoute;
