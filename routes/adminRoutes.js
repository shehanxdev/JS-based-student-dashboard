const express = require("express");
const {
  addStudent,
  addMarks,
  login,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/add-student", addStudent);
router.post("/add-marks", addMarks);
router.post("/login", login);

module.exports = router;
