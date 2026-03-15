import { useCart } from "../context/CartContext"

function ProductCard({ product, reduceStock }) {

  const { addToCart } = useCart()

  const stockPercent = (product.stock / product.totalStock) * 100

  return (

    <div className="w-[280px] bg-[#0b0f14] border border-[#1f2937] rounded-xl overflow-hidden
    transition-all duration-300
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
    hover:-translate-y-1">

      <img
        src={product.image}
        className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4">

        <h3 className="font-semibold text-white mb-1">
          {product.name}
        </h3>

        <p className="text-gray-400 text-sm mb-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-2">

          <p className="text-lg font-bold text-white">
            ${product.price}
          </p>

          <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">
            FLASH SALE
          </span>

        </div>

        <p className="text-xs text-gray-400 mb-1">
          {product.stock}/{product.totalStock} remaining
        </p>

        <div className="h-2 bg-slate-700 rounded mb-3">

          <div
            className="h-2 bg-green-400 rounded transition-all shadow-[0_0_10px_rgba(74,222,128,0.7)]"
            style={{ width: `${stockPercent}%` }}
          />

        </div>

        <button
          onClick={() => {
            addToCart(product)
            reduceStock(product.id)
          }}
          className="bg-cyan-500 w-full py-2 rounded text-black font-semibold
          transition-all duration-300
          hover:bg-cyan-400
          hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        >
          ADD TO CART
        </button>

      </div>

    </div>

  )

}

export default ProductCard