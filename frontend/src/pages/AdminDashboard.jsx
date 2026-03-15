import { useEffect, useState } from "react";
import socket from "../sockets/socketClient";
import StockChart from "../components/StockChart";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);

  const simulateTraffic = async () => {

    await fetch("http://localhost:5000/api/simulate", {
      method: "POST"
    });

  };

  useEffect(() => {

    socket.on("orderCreated", (order) => {

      setOrders(prev => [order, ...prev].slice(0, 10));
      setTotalOrders(prev => prev + 1);

    });

    return () => socket.off("orderCreated");

  }, []);

  return (

    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-3xl font-bold text-yellow-400 mb-10">
        RECODE Flash Sale Admin Dashboard
      </h1>

      <button
        onClick={simulateTraffic}
        className="bg-red-500 px-6 py-3 rounded-lg font-semibold mb-10"
      >
        Simulate 200 Buyers
      </button>

      <div className="grid grid-cols-2 gap-8 mb-10">

        <div className="bg-slate-800 p-6 rounded-xl">

          <h2 className="text-xl mb-2">
            Total Orders
          </h2>

          <p className="text-4xl text-green-400">
            {totalOrders}
          </p>

        </div>

        <StockChart />

      </div>

      <div className="bg-slate-800 p-6 rounded-xl">

        <h2 className="text-xl mb-4">
          Live Order Activity
        </h2>

        <div className="space-y-3">

          {orders.map((order, index) => (

            <div
              key={index}
              className="bg-slate-700 p-3 rounded"
            >
              Product #{order.productId} purchased — stock left: {order.remainingStock}
            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;