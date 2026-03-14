const products = [
  {
    id: 1,
    name: "Limited Sneaker Drop",
    price: 9999,
    stock: 100
  },
  {
    id: 2,
    name: "Gaming Console Drop",
    price: 49999,
    stock: 50
  }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

module.exports = {
  getAllProducts,
  getProductById,
  products
};