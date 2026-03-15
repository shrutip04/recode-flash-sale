import { useEffect, useState } from "react";
import socket from "../sockets/socketClient";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function StockChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    socket.on("stockUpdate", (update) => {

      setData(prev => [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          stock: update.newStock
        }
      ]);

    });

    return () => socket.off("stockUpdate");

  }, []);

  return (

    <div className="bg-slate-800 p-6 rounded-xl">

      <h2 className="text-xl mb-4 text-yellow-400">
        Live Stock Drop
      </h2>

      <LineChart width={600} height={300} data={data}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="stock"
          stroke="#22c55e"
        />

      </LineChart>

    </div>

  );

}

export default StockChart;