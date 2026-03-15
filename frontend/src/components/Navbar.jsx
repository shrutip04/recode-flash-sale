import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800">

<div className="flex items-center gap-2 font-bold">

⚡ <span>MIDNIGHT</span>
<span className="neon">DROP</span>

</div>

<div className="flex gap-10 text-gray-400">

<Link to="/">Home</Link>
<Link to="/drop">The Drop</Link>
<Link to="/flash-sale">Flash Sale</Link>
<Link to="/queue">Queue</Link>

</div>

<div className="flex items-center gap-6">

<div className="bg-slate-800 px-3 py-1 rounded text-sm">
🟢 3,186 live
</div>

<Link to="/login" className="secondary-btn">
Login
</Link>

</div>

</nav>

)

}

export default Navbar