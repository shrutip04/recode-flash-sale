import { useState,useEffect } from "react"

function LivePurchaseFeed(){

const [feed,setFeed] = useState([])

useEffect(()=>{

const interval = setInterval(()=>{

const users = ["USR-21A","USR-81K","USR-441","USR-92Z"]

const products = [
"Phantom X1",
"Nova Headset",
"Stealth Hoodie",
"Cyber Chrono"
]

const event = `${users[Math.floor(Math.random()*4)]} bought ${products[Math.floor(Math.random()*4)]}`

setFeed(prev => [event,...prev].slice(0,5))

},3000)

return ()=> clearInterval(interval)

},[])

return(

<div className="fixed bottom-6 left-6 w-72 bg-slate-800 p-4 rounded-xl">

<p className="text-sm text-cyan-400 mb-2">
Live Purchases
</p>

{feed.map((f,i)=>(
<div key={i} className="text-xs text-gray-300">
{f}
</div>
))}

</div>

)

}

export default LivePurchaseFeed