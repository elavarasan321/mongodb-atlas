const express = require("express");
const TaskRouter = require("./tasks");
const UserRouter = require("./users");


const routes = (app) => {
  app.use("/tasks", TaskRouter);
  app.use("/user", UserRouter);
 
};

module.exports = routes;