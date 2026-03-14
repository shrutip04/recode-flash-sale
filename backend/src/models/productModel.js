const { pool } = require("../config/db");

async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
}

async function getProductById(id) {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  getAllProducts,
  getProductById
};