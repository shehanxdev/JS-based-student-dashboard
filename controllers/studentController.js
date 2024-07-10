const bcrypt = require("bcryptjs");
const Student = require("../models/student");
const Marks = require("../models/marks");

exports.changePassword = async (req, res) => {
  try {
    const { id } = req.user;
    const { newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Student.update(
      { password: hashedPassword, isPasswordChanged: true },
      { where: { id } }
    );
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMarks = async (req, res) => {
  try {
    const { id } = req.user;
    const marks = await Marks.findAll({ where: { studentId: id } });
    res.json(marks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
