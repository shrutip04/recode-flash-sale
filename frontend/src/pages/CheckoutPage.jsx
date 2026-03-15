import { useState } from "react"
import Navbar from "../components/Navbar"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function CheckoutPage(){

const { cartItems, clearCart } = useCart()

const navigate = useNavigate()

const [orderPlaced,setOrderPlaced] = useState(false)
const [orderId,setOrderId] = useState(null)

const total = cartItems.reduce(
(sum,item)=> sum + item.price,
0
)

const handlePlaceOrder = async ()=>{

try{

const res = await fetch("http://localhost:5000/api/purchase",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
productId: cartItems[0]?.id
})
})

const data = await res.json()

setOrderId(data.orderId || "ORD-" + Math.random().toString(36).substring(2,9))

setOrderPlaced(true)

clearCart()

}catch(err){

console.error(err)

}

}

return(

<div className="min-h-screen bg-[#0b0f14] text-white">

<Navbar/>

<div className="max-w-6xl mx-auto pt-16">

<h1 className="text-4xl mb-12">
CHECK<span className="text-cyan-400">OUT</span>
</h1>

{/* ORDER SUCCESS */}

{orderPlaced && (

<div className="border border-green-600 bg-green-900/20 rounded-xl p-6 mb-12">

<p className="text-green-400 text-lg font-semibold">
✓ Order confirmed! You got the drop.
</p>

<p className="text-gray-400 mt-1">
Order ID: {orderId}
</p>

</div>

)}

{/* EMPTY CART */}

{cartItems.length === 0 && !orderPlaced && (

<div className="flex flex-col items-center pt-20">

<div className="text-gray-500 text-xl mb-4">
CART EMPTY
</div>

<p className="text-gray-400 mb-6">
No items in your cart yet.
</p>

<button
onClick={()=>navigate("/drop")}
className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold"
>
BROWSE DROPS
</button>

</div>

)}

{/* CART ITEMS */}

{cartItems.length > 0 && (

<div className="grid grid-cols-3 gap-8">

{/* CART ITEM */}

<div className="col-span-2 space-y-4">

{cartItems.map((item,index)=>(

<div
key={index}
className="bg-slate-800 rounded-xl p-4 flex items-center justify-between"
>

<div className="flex items-center gap-4">

<img
src={item.image}
className="w-20 h-20 object-cover rounded"
/>

<div>

<p className="font-semibold">
{item.name}
</p>

<p className="text-cyan-400">
${item.price}
</p>

</div>

</div>

<button
onClick={clearCart}
className="text-gray-400 hover:text-red-400"
>
🗑
</button>

</div>

))}

</div>

{/* ORDER SUMMARY */}

<div className="bg-slate-800 p-6 rounded-xl h-fit">

<h2 className="mb-4 text-lg">
ORDER SUMMARY
</h2>

{cartItems.map((item,index)=>(

<div
key={index}
className="flex justify-between mb-2"
>

<span>
{item.name}
</span>

<span>
${item.price}
</span>

</div>

))}

<div className="border-t border-slate-700 mt-4 pt-4 flex justify-between text-xl">

<span>TOTAL</span>

<span className="text-cyan-400">
${total}
</span>

</div>

<button
onClick={handlePlaceOrder}
className="w-full bg-cyan-500 text-black py-3 rounded-lg mt-6 font-semibold"
>
PLACE ORDER
</button>

<button
onClick={clearCart}
className="w-full text-gray-400 mt-3"
>
Clear Cart
</button>

</div>

</div>

)}

</div>

</div>

)

}

export default CheckoutPage