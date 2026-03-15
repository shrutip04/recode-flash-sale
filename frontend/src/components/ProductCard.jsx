function ProductCard({product}){

return(

<div className="card overflow-hidden w-[280px]">

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

<div className="h-2 bg-slate-700 rounded mb-3">

<div
className="h-2 bg-green-400 rounded"
style={{width:"70%"}}
/>

</div>

<button className="primary-btn w-full">

ADD TO CART

</button>

</div>

</div>

)

}

const handleBuy = async () => {

await fetch("http://localhost:5000/api/purchase",{

method:"POST",
headers:{ "Content-Type":"application/json" },

body:JSON.stringify({
productId: product.id
})

})

}

export default ProductCard