let orders = [];

function createOrder(productId) {

  const newOrder = {
    id: "ORD-" + Date.now(),
    productId: productId,
    status: "CONFIRMED",
    createdAt: new Date()
  };

  orders.push(newOrder);

  return newOrder;
}

function getAllOrders() {
  return orders;
}

module.exports = {
  createOrder,
  getAllOrders
};