import { useEffect, useState } from "react";
import socket from "../sockets/socketClient";

const StockDisplay = ({ initialStock }) => {
  const [stock, setStock] = useState(initialStock);

  useEffect(() => {
    socket.on("stockUpdate", (data) => {
      console.log("Stock update received:", data);
      setStock(data.newStock);
    });

    return () => {
      socket.off("stockUpdate");
    };
  }, []);

  return (
    <div>
      <h2>Stock Remaining: {stock}</h2>
    </div>
  );
};

export default StockDisplay;