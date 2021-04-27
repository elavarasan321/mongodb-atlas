const express = require("express");
const TaskRouter = require("./tasks");
const UserRouter = require("./users");


const routes = (app) => {
  app.use("/", TaskRouter);
  app.use("/users", UserRouter);
 
};

module.exports = routes;