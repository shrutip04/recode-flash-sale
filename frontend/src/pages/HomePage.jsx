import Navbar from "../components/Navbar";
import CategoryRow from "../components/CategoryRow";
import FlashBanner from "../components/FlashBanner";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

import { useLocation } from "react-router-dom";

function HomePage() {

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const category = params.get("category");
  const search = params.get("search");

  let filteredProducts = products;

  // Category filtering
  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search filtering
  if (search) {
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Categories */}
      <CategoryRow />

      <div className="p-10">

        {/* Flash Sale Banner */}
        <FlashBanner />

        <h2 className="text-2xl mt-10 mb-6 text-yellow-400">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default HomePage;