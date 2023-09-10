const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const ProductCategories = sequelize.define(
  "product_categories",
  {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ProductCategories;
