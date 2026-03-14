const express = require("express");
const router = express.Router();

const { getAllOrders } = require("../models/orderModel");

router.get("/", (req, res) => {
  const orders = getAllOrders();
  res.json(orders);
});

module.exports = router;