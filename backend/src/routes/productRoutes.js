const express = require("express");
const router = express.Router();

const {
  fetchProducts,
  fetchProduct
} = require("../controllers/productController");

router.get("/", fetchProducts);
router.get("/:id", fetchProduct);

module.exports = router;