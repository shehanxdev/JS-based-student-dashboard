const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const Marks = require("../models/marks");

exports.addStudent = async (req, res) => {
  try {
    const { registrationNumber, name } = req.body;
    const password = await bcrypt.hash(registrationNumber, 10); // Default password is registration number
    const student = await Student.create({
      registrationNumber,
      name,
      password,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addMarks = async (req, res) => {
  try {
    const { studentId, maths, science, english } = req.body;
    const marks = await Marks.create({ studentId, maths, science, english });
    res.status(201).json(marks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { registrationNumber, password } = req.body;
  const student = await Student.findOne({ where: { registrationNumber } });
  if (!student) return res.status(401).json({ message: "Invalid credentials" });

  const isValidPassword = await bcrypt.compare(password, student.password);
  if (!isValidPassword)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: student.id, isAdmin: student.isAdmin },
    "secret_key"
  );
  res.json({ token });
};
