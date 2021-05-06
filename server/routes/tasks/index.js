
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const auth = require("../security/verify");


/* GET home page. */
router.get("/tasks", controller.getAllTask );
router.post("/tasks", controller.newTask );
 router.patch("/tasks/:uid", controller.updateTask );
router.get("/tasks/:uid", auth,controller.getTask );
router.delete("/tasks/:uid", controller.deleteTask );


module.exports = router;
