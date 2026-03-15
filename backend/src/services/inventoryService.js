const { broadcastStockUpdate } = require("../sockets/socketServer");
const { products } = require("../models/productModel");


function attemptPurchase(productId) {

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return {
      success: false,
      message: "Product not found"
    };
  }

  if (product.stock <= 0) {
    return {
      success: false,
      message: "Sold Out"
    };
  }

  product.stock -= 1;

  broadcastStockUpdate(productId, product.stock);

  return {
    success: true,
    message: "Purchase successful",
    remainingStock: product.stock
  };
}

module.exports = {
  attemptPurchase
};


