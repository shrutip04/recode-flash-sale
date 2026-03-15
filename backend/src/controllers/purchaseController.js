const { attemptPurchase } = require("../services/inventoryService");
const { getIO } = require("../sockets/socketServer");

function purchaseProduct(req, res) {

  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "Product ID required"
    });
  }

  const result = attemptPurchase(productId);

  if (result.success) {

    const io = getIO();

    io.emit("orderCreated", {
      productId: productId,
      remainingStock: result.remainingStock,
      timestamp: new Date()
    });

  }

  res.json(result);
}

module.exports = {
  purchaseProduct
};