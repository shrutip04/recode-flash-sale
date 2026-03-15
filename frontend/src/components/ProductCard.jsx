function ProductCard({ product }) {

  const stockPercent = (product.stock / product.totalStock) * 100

  const handleBuy = async () => {

    try {

      await fetch("http://localhost:5000/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id
        })
      })

      alert("Added to cart")

    } catch (err) {
      console.error(err)
      alert("Purchase failed")
    }

  }

  return (

    <div className="w-[280px] bg-[#0b0f14] border border-[#1f2937] rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all">

      {/* Product Image */}
      <img
        src={product.image}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">

        {/* Name */}
        <h3 className="font-semibold text-white mb-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3">
          {product.description}
        </p>

        {/* Price + Tag */}
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
          {product.stock} / {product.totalStock} remaining
        </p>

        {/* Progress bar */}
        <div className="h-2 bg-slate-700 rounded mb-4">

          <div
            className="h-2 bg-green-400 rounded transition-all"
            style={{ width: `${stockPercent}%` }}
          />

        </div>

        {/* Button */}
        <button
          onClick={handleBuy}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 rounded-lg transition"
        >
          ADD TO CART
        </button>

      </div>

    </div>

  )

}

export default ProductCard