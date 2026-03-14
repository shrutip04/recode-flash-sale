import Navbar from "../components/Navbar";
import CategoryRow from "../components/CategoryRow";
import HeroBanner from "../components/HeroBanner";
import FlashBanner from "../components/FlashBanner";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Top Navigation */}
      <Navbar />

      {/* Category Navigation */}
      <CategoryRow />

      <div className="p-10">

        {/* Hero Banner */}
        <HeroBanner />

        {/* Flash Drop Section */}
        <div className="mt-10">
          <FlashBanner />
        </div>

        {/* Product Section */}
        <h2 className="text-2xl mt-12 mb-6 text-yellow-400">
          Trending Products
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </div>
  );
}

export default HomePage;