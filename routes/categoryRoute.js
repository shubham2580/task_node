const express = require("express");
const {
    categoryAdded,
    getCategory,
    categorydelete
} = require("../controller/categoryController");

const router = express.Router();

router.route("/addCategory").post(categoryAdded);
router.route("/getCategory").post(getCategory);
router.route("/categorydelete").post(categorydelete);







module.exports = router;