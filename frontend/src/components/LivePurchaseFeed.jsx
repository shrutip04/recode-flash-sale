import { useEffect, useState } from "react"
import socket from "../sockets/socketClient"

function LivePurchaseFeed(){

  const [events,setEvents] = useState([])

  useEffect(()=>{

    const handler = (order)=>{

      const item = {
        id: Math.random(),
        text: `User bought product #${order.productId}`,
        time: new Date().toLocaleTimeString()
      }

      setEvents(prev => [item,...prev].slice(0,5))

    }

    socket.on("orderCreated",handler)

    return ()=> socket.off("orderCreated",handler)

  },[])

  return(

    <div className="fixed bottom-6 left-6 w-72 bg-[#0b0f14] border border-[#1f2937] rounded-xl p-4 shadow-lg">

      <p className="text-sm text-cyan-400 mb-3">
        Live Purchases
      </p>

      <div className="space-y-2 text-xs text-gray-300">

        {events.map(e=>(
          <div key={e.id} className="bg-slate-800 p-2 rounded">
            {e.text}
          </div>
        ))}

      </div>

    </div>

  )

}

export default LivePurchaseFeed