
const express = require("express");
const router = express.Router();
const controller = require("./controller");



/* GET home page. */

router.post("/user", controller.newUser );
router.get("/user/login", controller.loginUser);
router.get("/user/logout", controller.logoutUser);





module.exports = router;












