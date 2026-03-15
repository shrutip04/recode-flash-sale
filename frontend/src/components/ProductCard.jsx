import { useCart } from "../context/CartContext"

function ProductCard({ product }) {

  const { addToCart } = useCart()

  const stock = product.stock ?? 10
  const totalStock = product.totalStock ?? 50

  const stockPercent = (stock / totalStock) * 100

  return (

    <div className="w-[280px] bg-[#0b0f14] border border-[#1f2937] rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">

        {/* Product Name */}
        <h3 className="font-semibold text-white mb-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3">
          {product.description}
        </p>

        {/* Price + Badge */}
        <div className="flex justify-between items-center mb-2">

          <p className="text-lg font-bold text-white">
            ${product.price}
          </p>

          <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded">
            FLASH SALE
          </span>

        </div>

        {/* Stock text */}
<p className="text-xs text-gray-400 mb-1">
  {stock}/{totalStock} remaining
</p>

{/* Progress Bar */}
<div className="h-2 bg-slate-700 rounded mb-4 overflow-hidden">

  <div
    className={`h-2 rounded transition-all duration-700 ${
      stockPercent < 30 ? "bg-red-400" : stockPercent < 60 ? "bg-yellow-400" : "bg-green-400"
    }`}
    style={{ width: `${stockPercent}%` }}
  />

</div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 rounded-lg transition"
        >
          ADD TO CART
        </button>

      </div>

    </div>

  )

}

export default ProductCard