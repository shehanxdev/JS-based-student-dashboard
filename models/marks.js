const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./student");

const Marks = sequelize.define("Marks", {
  maths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  science: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  english: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Marks.belongsTo(Student);
Student.hasMany(Marks);

module.exports = Marks;
