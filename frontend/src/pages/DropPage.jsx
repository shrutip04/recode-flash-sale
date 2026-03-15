import { useState } from "react"
import Navbar from "../components/Navbar"
import ProductGrid from "../components/ProductGrid"
import QueueStatus from "../components/QueueStatus"
import LiveQueueFeed from "../components/LiveQueueFeed"
import CountdownTimer from "../components/CountdownTimer"

function DropPage(){

const [dropLive,setDropLive] = useState(false)

return(

<div className="min-h-screen bg-[#0b0f14] text-white">

<Navbar/>

<div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-10">

<div className="col-span-2">

<h1 className="text-4xl mb-6">
PRODUCT <span className="text-cyan-400">DROP</span>
</h1>

<CountdownTimer setDropLive={setDropLive}/>

<ProductGrid dropLive={dropLive}/>

</div>

<div className="space-y-6">

<QueueStatus/>
<LiveQueueFeed/>

</div>

</div>

</div>

)

}

export default DropPage