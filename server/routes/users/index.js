
const express = require("express");
const router = express.Router();
const controller = require("./controller");



/* GET home page. */

router.post("/", controller.newUser );
router.get("/login", controller.loginUser);
router.get("/logout", controller.logoutUser);





module.exports = router;












