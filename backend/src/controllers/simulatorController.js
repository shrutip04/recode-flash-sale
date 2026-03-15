const { attemptPurchase } = require("../services/inventoryService");
const { createOrder } = require("../models/orderModel");
const { getIO } = require("../sockets/socketServer");

function simulateTraffic(req, res) {

  const productId = 1;
  const buyers = 200;

  const io = getIO();

  let processed = 0;

  const interval = setInterval(() => {

    const burst = Math.floor(Math.random() * 8) + 3;

    for (let i = 0; i < burst && processed < buyers; i++) {

      const result = attemptPurchase(productId);

      if (result.success) {

        createOrder(productId);

        io.emit("orderCreated", {
          productId,
          remainingStock: result.remainingStock
        });

      }

      processed++;

    }

    if (processed >= buyers) {
      clearInterval(interval);
    }

  }, 300);

  res.json({
    message: "Traffic simulation started",
    buyers
  });

}

module.exports = { simulateTraffic };