
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const auth = require("../security/verify");


/* GET home page. */
router.get("/tasks", auth,controller.getAllTask );
router.post("/tasks",auth, controller.newTask );
 router.patch("/tasks/:uid", auth,controller.updateTask );
router.get("/tasks/:uid", auth,controller.getTask );
router.delete("/tasks/:uid",auth, controller.deleteTask );


module.exports = router;
