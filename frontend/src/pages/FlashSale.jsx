import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import CountdownTimer from "../components/CountdownTimer";


function FlashSale() {

  const navigate = useNavigate();

  const [dropLive, setDropLive] = useState(false);

  const totalStock = 50;
  const sold = 12;

  const viewers = 142;

  const handleBuy = () => {
    if (dropLive) {
      navigate("/queue");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 text-yellow-400">
        🔥 Midnight Product Drop
      </h1>

      <p className="text-gray-400 mb-2">
        Limited edition release. First come, first served.
      </p>

      {/* Live viewers */}
      <p className="text-red-400 mb-6">
        👀 {viewers} people viewing this drop
      </p>

      {/* Countdown */}
      <CountdownTimer onComplete={setDropLive} />

      {/* Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 w-[340px] hover:scale-105 transition duration-300"
      >

        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
          alt="Sneakers"
          className="rounded-lg mb-5"
        />

        <h2 className="text-xl font-semibold mb-2">
          Limited Edition Sneakers
        </h2>

        <p className="text-gray-400 mb-2">$99</p>

        {/* Stock display */}
        <p className="text-green-400 mb-2">
        Stock Remaining: {totalStock - sold}
        </p>

        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div
            className="bg-green-400 h-2 rounded-full"
            style={{ width: `${((totalStock - sold) / totalStock) * 100}%` }}
        ></div>
        </div>

        {/* Buy button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBuy}
          disabled={!dropLive}
          className={`px-6 py-2 rounded-lg font-semibold transition mt-4 ${
            dropLive
              ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-500/30"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
        >
          {dropLive ? "Buy Now" : "Waiting for Drop"}
        </motion.button>

      </motion.div>

    </div>
  );
}

export default FlashSale;