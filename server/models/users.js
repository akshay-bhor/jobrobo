const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const User = sequelize.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    pass: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
