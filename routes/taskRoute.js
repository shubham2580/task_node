const express = require("express");
const {
    upload,
    getListFiles,
    download,
    remove,
    removeSync,
} = require("../controller/file.controller");

const { taskAdded, taskGet, taskUpdate, taskDelete} = require("../controller/taskController")

const router = express.Router();

// router.route("/savetaskdata").post(upload);

router.route("/savetaskdata").post(taskAdded);
router.route("/getsaveddata").post(taskGet);
router.route("/updatedata").post(taskUpdate);
router.route("/taskDelete").post(taskDelete);





module.exports = router;