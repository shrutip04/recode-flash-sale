const { attemptPurchase } = require("../services/inventoryService");
const { createOrder } = require("../models/orderModel");

function purchaseProduct(req, res) {

  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "Product ID required"
    });
  }

  const result = attemptPurchase(productId);

  if (!result.success) {
    return res.status(400).json(result);
  }

  const order = createOrder(productId);

  return res.json({
    success: true,
    message: "Purchase successful",
    orderId: order.id,
    remainingStock: result.remainingStock
  });

}

module.exports = {
  purchaseProduct
};