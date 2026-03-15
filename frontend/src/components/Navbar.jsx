import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar(){

const { cartItems } = useCart()

return(

<div className="flex justify-between items-center px-10 py-4 border-b border-slate-800 bg-[#0b0f14]">

<div className="text-xl font-bold text-cyan-400">
MIDNIGHTDROP
</div>

<div className="flex gap-8 text-sm text-gray-300">

<Link to="/">Home</Link>
<Link to="/drop">The Drop</Link>
<Link to="/flash">Flash Sale</Link>
<Link to="/queue">Queue</Link>

</div>

<div className="flex items-center gap-6">

<div className="bg-slate-800 px-3 py-1 rounded-full text-sm">
🟢 3,186 live
</div>

<Link to="/checkout">
🛒 {cartItems.length}
</Link>

<Link
to="/login"
className="border border-cyan-400 px-4 py-1 rounded
hover:bg-cyan-400 hover:text-black
transition-all duration-300
hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
>

Login

</Link>

</div>

</div>

)

}

export default Navbar