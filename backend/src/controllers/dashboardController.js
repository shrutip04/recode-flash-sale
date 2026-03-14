const { getAllOrders } = require("../models/orderModel");
const { products } = require("../models/productModel");

function getDashboardStats(req, res) {

  const orders = getAllOrders();

  const totalOrders = orders.length;

  const totalStockRemaining = products.reduce((sum, product) => {
    return sum + product.stock;
  }, 0);

  const stats = {
    totalOrders,
    totalStockRemaining,
    totalProducts: products.length
  };

  res.json(stats);
}

module.exports = {
  getDashboardStats
};