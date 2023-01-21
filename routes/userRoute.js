const express = require("express");
const {
  userSignUp,
  userLogin
} = require("../controller/signuoController");

const router = express.Router();

router.route("/signUpDataSave").post(userSignUp);
router.route("/loginData").post(userLogin); 




module.exports = router;
