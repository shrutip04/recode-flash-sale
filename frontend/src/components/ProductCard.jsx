import { useCart } from "../context/CartContext"

function ProductCard({ product, reduceStock, dropLive }) {

  const { addToCart } = useCart()

  const stockPercent = (product.stock / product.totalStock) * 100

  return (

    <div className="group relative w-[260px] bg-[#0b0f14] border border-[#1f2937] rounded-xl overflow-hidden
    transition-all duration-300
    hover:border-cyan-400
    hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
    hover:-translate-y-2">

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-400/10"></div>

      <div className="relative">

        <div className="overflow-hidden">

          <img
            src={product.image}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

        </div>

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
            disabled={!dropLive}
            onClick={() => {

              addToCart(product)

              reduceStock(product.id)

            }}
            className={`w-full py-2 rounded font-semibold transition-all duration-300
            ${
              dropLive
              ? "bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >

            {dropLive ? "ADD TO CART" : "DROP LOCKED"}

          </button>

        </div>

      </div>

    </div>

  )

}

export default ProductCard