import { useCart } from "../context/CartContext"

function ProductCard({ product, reduceStock, dropLive }) {

  const { addToCart } = useCart()

  const stockPercent = (product.stock / product.totalStock) * 100

  const soldOut = product.stock === 0

  return (

    <div className={`group relative w-[260px] border rounded-xl overflow-hidden
    transition-all duration-300 hover:-translate-y-2
    ${soldOut
      ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
      : "border-[#1f2937] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
    }`}>

      {/* Hover glow */}
      {!soldOut && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-400/10"></div>
      )}

      <div className="relative">

        <div className="overflow-hidden">

          <img
            src={product.image}
            className={`h-44 w-full object-cover transition-transform duration-500
            ${soldOut ? "grayscale" : "group-hover:scale-110"}`}
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

            {soldOut
              ? <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">SOLD OUT</span>
              : <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">FLASH SALE</span>
            }

          </div>

          <p className="text-xs text-gray-400 mb-1">

            {soldOut ? "No stock remaining" : `${product.stock}/${product.totalStock} remaining`}

          </p>

          <div className="h-2 bg-slate-700 rounded mb-3">

            <div
              className={`${soldOut ? "bg-red-500" : "bg-green-400"} h-2 rounded transition-all`}
              style={{ width: `${stockPercent}%` }}
            />

          </div>

          <button
            disabled={!dropLive || soldOut}
            onClick={()=>{
              addToCart(product)
              reduceStock(product.id)
            }}
            className={`w-full py-2 rounded font-semibold transition-all duration-300

            ${soldOut
              ? "bg-red-500 text-white cursor-not-allowed"
              : dropLive
                ? "bg-cyan-500 hover:bg-cyan-400 text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.7)]"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >

            {soldOut
              ? "SOLD OUT"
              : dropLive
                ? "ADD TO CART"
                : "DROP LOCKED"
            }

          </button>

        </div>

      </div>

    </div>

  )

}

export default ProductCard