const { getIO } = require("../sockets/socketServer");
const { products } = require("../models/productModel");

let purchaseLock = false;

function attemptPurchase(productId) {

  if (purchaseLock) {
    return { success: false, message: "High traffic. Please try again." };
  }

  purchaseLock = true;

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    purchaseLock = false;
    return { success: false, message: "Product not found" };
  }

  if (product.stock <= 0) {
    purchaseLock = false;
    return { success: false, message: "Sold Out" };
  }

  product.stock -= 1;

  const io = getIO();

  io.emit("stockUpdate", {
    productId: product.id,
    newStock: product.stock
  });

  purchaseLock = false;

  return {
    success: true,
    remainingStock: product.stock
  };
}

module.exports = { attemptPurchase };