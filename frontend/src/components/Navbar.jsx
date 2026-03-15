import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar(){

const { cartItems } = useCart()

return(

<div className="flex justify-between items-center px-10 py-4 border-b border-slate-800">

<div className="text-xl font-bold text-cyan-400">
MIDNIGHTDROP
</div>

<div className="flex gap-8 text-sm">

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
className="border border-cyan-400 px-4 py-1 rounded"
>
Login
</Link>

</div>

</div>

)

}

export default Navbar