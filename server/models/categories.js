const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Categories = sequelize.define(
  "categories",
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Categories;
