const { attemptPurchase } = require("../services/inventoryService");
const { createOrder } = require("../models/orderModel");

function simulateTraffic(req, res) {

  const { productId, buyers } = req.body;

  let success = 0;
  let failed = 0;

  for (let i = 0; i < buyers; i++) {

    const result = attemptPurchase(productId);

    if (result.success) {
      createOrder(productId);
      success++;
    } else {
      failed++;
    }

  }

  res.json({
    buyers,
    successfulPurchases: success,
    failedAttempts: failed
  });

}

module.exports = {
  simulateTraffic
};