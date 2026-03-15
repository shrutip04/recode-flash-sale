import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

function ProductGrid() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))

  }, [])

  return (

    <section className="max-w-[1200px] mx-auto px-6 pb-20">

      <h2 className="text-3xl text-center mb-10 text-white">
        TONIGHT'S <span className="text-cyan-400">DROPS</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  )

}

export default ProductGrid