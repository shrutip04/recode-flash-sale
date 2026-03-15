import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));

  }, []);

  return (

    <div className="max-w-7xl mx-auto px-10 pb-20">

      <h2 className="text-3xl mb-8 text-center">
        TONIGHT'S <span className="neon">DROPS</span>
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {products.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  );

}

export default ProductGrid;