import { useNavigate } from "react-router-dom"

function HeroBanner(){

const navigate = useNavigate()

return(

<section className="text-center pt-28 pb-32">

<h1 className="text-7xl font-bold tracking-widest">
THE MIDNIGHT
</h1>

<h1 className="text-7xl font-bold text-cyan-400 mb-6">
PRODUCT DROP
</h1>

<p className="text-gray-400 max-w-xl mx-auto mb-10">

Thousands arrive. Only a few leave with the prize.
When the clock hits zero, the gate opens.

</p>

<div className="flex justify-center gap-6">

<button
onClick={()=>navigate("/drop")}
className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold"
>

ENTER THE DROP →

</button>

<button
onClick={()=>navigate("/flash")}
className="border border-cyan-400 px-6 py-3 rounded-lg"
>

VIEW PRODUCTS

</button>

</div>

</section>

)

}

export default HeroBanner