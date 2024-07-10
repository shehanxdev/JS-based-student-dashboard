const express = require("express");
const {
  changePassword,
  getMarks,
} = require("../controllers/studentController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/change-password", authMiddleware, changePassword);
router.get("/marks", authMiddleware, getMarks);

module.exports = router;
