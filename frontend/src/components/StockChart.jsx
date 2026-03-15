import { useEffect, useState } from "react"
import socket from "../sockets/socketClient"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

function StockChart() {

  const [data, setData] = useState([])

  useEffect(() => {

    const handler = (update) => {

      setData(prev => [
        ...prev.slice(-20),
        {
          time: new Date().toLocaleTimeString(),
          stock: update.newStock
        }
      ])

    }

    socket.on("stockUpdate", handler)

    return () => socket.off("stockUpdate", handler)

  }, [])

  return (

    <div className="bg-[#0b0f14] border border-[#1f2937] p-6 rounded-xl">

      <h2 className="text-xl mb-6 text-yellow-400 font-semibold">
        Live Stock Drop
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="stock"
            stroke="#22c55e"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )

}

export default StockChart