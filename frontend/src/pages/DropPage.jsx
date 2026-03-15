import { useState } from "react"
import Navbar from "../components/Navbar"
import ProductGrid from "../components/ProductGrid"
import QueueStatus from "../components/QueueStatus"
import LiveQueueFeed from "../components/LiveQueueFeed"
import CountdownTimer from "../components/CountdownTimer"
import { simulateBuyers } from "../utils/simulator";
import LivePurchaseFeed from "../components/LivePurchaseFeed"

function DropPage(){

const [dropLive,setDropLive] = useState(false)
const [trafficCount, setTrafficCount] = useState(0);

return(

<div className="min-h-screen bg-[#0b0f14] text-white">

<Navbar/>

<div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-10">

<div className="col-span-2">

<div style={{
  margin: "20px",
  padding: "15px",
  border: "1px solid #00f0ff",
  borderRadius: "10px"
}}>

<h3>Traffic Simulator</h3>

<p>Simulated Buyers: {trafficCount}</p>

<button
onClick={() => simulateBuyers(1, 100, setTrafficCount)}
style={{
  padding: "10px 20px",
  background: "#00f0ff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
}}
>
Simulate 100 Buyers
</button>

</div>

<h1 className="text-4xl mb-6">
PRODUCT <span className="text-cyan-400">DROP</span>
</h1>

<CountdownTimer setDropLive={setDropLive}/>

<ProductGrid dropLive={dropLive}/>

</div>

<div className="space-y-6">

<QueueStatus/>
<LiveQueueFeed/>
<LivePurchaseFeed />

</div>

</div>

</div>

)

}

export default DropPage