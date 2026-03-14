import { useNavigate } from "react-router-dom";

function FlashBanner() {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/flash-sale")}
      className="bg-yellow-400 text-black rounded-xl p-8 flex items-center justify-between cursor-pointer hover:scale-[1.02] transition"
    >

      <div>

        <h2 className="text-3xl font-bold mb-2">
          🔥 Midnight Flash Drop
        </h2>

        <p>
          Limited products. Queue based purchase system.
        </p>

      </div>

      <button className="bg-black text-yellow-400 px-6 py-2 rounded">
        Enter Drop
      </button>

    </div>
  );
}

export default FlashBanner;