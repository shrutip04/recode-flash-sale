import { useEffect, useState } from "react"
import socket from "../sockets/socketClient"

function StockDisplay(){

  const [stock, setStock] = useState(0)

  useEffect(()=>{

    const handler = (data)=>{
      setStock(data.newStock)
    }

    socket.on("stockUpdate", handler)

    return ()=> socket.off("stockUpdate", handler)

  },[])

  return(

    <div className="bg-[#0b0f14] border border-[#1f2937] p-4 rounded-lg text-center">

      <div className="text-gray-400 text-sm mb-1">
        Stock Remaining
      </div>

      <div className="text-2xl font-bold text-green-400">
        {stock}
      </div>

    </div>

  )

}

export default StockDisplay