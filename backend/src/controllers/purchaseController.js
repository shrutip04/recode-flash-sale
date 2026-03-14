const { attemptPurchase } = require("../services/inventoryService");

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

  return res.json(result);
}

module.exports = {
  purchaseProduct
};