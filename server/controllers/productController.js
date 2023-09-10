const { QueryTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Products = require("../models/products");
const ProductsCategories = require("../models/productCategories");

const getProducts = async (req, res, next) => {
  try {
    const allProducts = await sequelize.query(
      `SELECT p.*, c.category_id, c.category_name FROM products p INNER JOIN product_categories pc ON pc.product_id = p.product_id 
    INNER JOIN categories c ON pc.category_id = c.category_id WHERE c.parent_id IS NULL`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
};

const searchProducts = async (req, res, next) => {
  try {
    const query = req.query.searchTerm;

    const productsBySearch = await sequelize.query(
      `SELECT p.*, c.category_id, c.category_name FROM products p INNER JOIN product_categories pc ON pc.product_id = p.product_id 
        INNER JOIN categories c ON pc.category_id = c.category_id WHERE c.parent_id IS NULL AND p.product_name LIKE ?`,
      {
        type: QueryTypes.SELECT,
        replacements: [`%${query}%`],
      }
    );

    res.status(200).json(productsBySearch);
  } catch (err) {
    next(err);
  }
};

const productsByCategory = async (req, res, next) => {
  try {
    const category_id = req.params.category_id;

    const productsBySearch = await sequelize.query(
      `SELECT p.*, c.category_id, c.category_name FROM products p INNER JOIN product_categories pc ON pc.product_id = p.product_id 
            INNER JOIN categories c ON pc.category_id = c.category_id WHERE pc.category_id = ?`,
      {
        type: QueryTypes.SELECT,
        replacements: [category_id],
      }
    );

    res.status(200).json(productsBySearch);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProducts,
  searchProducts,
  productsByCategory,
};
