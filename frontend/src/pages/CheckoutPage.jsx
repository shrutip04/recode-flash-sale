import { useState } from "react"
import Navbar from "../components/Navbar"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function CheckoutPage(){

const { cartItems, clearCart } = useCart()

const navigate = useNavigate()

const [processing,setProcessing] = useState(false)
const [orderSuccess,setOrderSuccess] = useState(false)

const total = cartItems.reduce(
(sum,item)=> sum + item.price,
0
)

const handlePlaceOrder = () => {

setProcessing(true)

setTimeout(()=>{

setProcessing(false)

setOrderSuccess(true)

clearCart()

},3000)

}

return(

<div className="min-h-screen bg-[#0b0f14] text-white">

<Navbar/>

<div className="max-w-6xl mx-auto pt-16">

<h1 className="text-4xl mb-12">
CHECK<span className="text-cyan-400">OUT</span>
</h1>

{/* PAYMENT PROCESSING MODAL */}

{processing && (

<div className="fixed inset-0 flex items-center justify-center bg-black/60">

<div className="bg-[#0b0f14] border border-cyan-400 p-8 rounded-xl text-center">

<p className="text-xl text-cyan-400 mb-4">
Processing Payment...
</p>

<p className="text-gray-400">
Please wait while we secure your drop.
</p>

</div>

</div>

)}

{/* ORDER SUCCESS */}

{orderSuccess && (

<div className="border border-green-600 bg-green-900/20 rounded-xl p-6 mb-12">

<p className="text-green-400 text-lg font-semibold">
✓ Order confirmed! You got the drop.
</p>

<p className="text-gray-400 mt-1">
Your item will be shipped soon.
</p>

<button
onClick={()=>navigate("/")}
className="mt-4 bg-cyan-500 text-black px-6 py-2 rounded"
>
Back to Home
</button>

</div>

)}

{/* EMPTY CART */}

{cartItems.length === 0 && !orderSuccess && (

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

{cartItems.length > 0 && !orderSuccess && (

<div className="grid grid-cols-3 gap-8">

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

</div>

))}

</div>

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
className="w-full text-red-400 mt-3"
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