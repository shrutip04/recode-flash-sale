import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import CategoryRow from "../components/CategoryRow";
import FlashBanner from "../components/FlashBanner";
import ProductCard from "../components/ProductCard";

function HomePage() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category = params.get("category");
  const search = params.get("search");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch products from backend
  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));

  }, []);

  // filtering
  useEffect(() => {

    let temp = products;

    if (category) {
      temp = temp.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      temp = temp.filter(
        (p) => p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(temp);

  }, [category, search, products]);

  return (
    <div className="min-h-screen">

      <Navbar />

      <CategoryRow />

      <div className="p-10">

        <FlashBanner />

        <h2 className="text-2xl mt-10 mb-6 text-yellow-400">
          Trending Products
        </h2>

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