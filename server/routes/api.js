const express = require("express");
const { validateUserAuthInput } = require("../middleware/authInputValidator");
const { authenticateUser } = require("../controllers/authController");
const { getCategoryTree } = require("../controllers/categoryController");
const {
  getProducts,
  searchProducts,
  productsByCategory,
} = require("../controllers/productController");
const router = express.Router();

router.post("/auth", validateUserAuthInput, authenticateUser);

router.get("/categories", getCategoryTree);

router.get("/products", getProducts);

router.get("/search", searchProducts);

router.get("/category/:category_id/products", productsByCategory);

module.exports = router;
