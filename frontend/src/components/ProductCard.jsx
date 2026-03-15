import { useState } from "react"
import { useCart } from "../context/CartContext"

function ProductCard({product}){

const { addToCart } = useCart()

const [stock,setStock] = useState(product.stock)

const stockPercent = (stock/product.totalStock)*100

return(

<div className="bg-[#0b0f14] border border-[#1f2937] rounded-xl overflow-hidden w-[280px]">

<img
src={product.image}
className="h-44 w-full object-cover"
/>

<div className="p-4">

<h3 className="font-semibold mb-1">
{product.name}
</h3>

<p className="text-gray-400 text-sm mb-3">
{product.description}
</p>

<div className="flex justify-between items-center mb-2">

<p className="text-lg font-bold">
${product.price}
</p>

<span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">
FLASH SALE
</span>

</div>

<p className="text-xs text-gray-400 mb-1">
{stock}/{product.totalStock} remaining
</p>

<div className="h-2 bg-slate-700 rounded mb-3">

<div
className="h-2 bg-green-400 rounded transition-all"
style={{width:`${stockPercent}%`}}
/>

</div>

<button
onClick={()=>{

addToCart(product)

setStock(prev=> prev>0 ? prev-1 : 0)

}}
className="bg-cyan-500 w-full py-2 rounded text-black font-semibold"
>

ADD TO CART

</button>

</div>

</div>

)

}

export default ProductCard