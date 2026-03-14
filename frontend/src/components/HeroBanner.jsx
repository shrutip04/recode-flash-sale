import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-12 flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold mb-4">
          Big Deals This Week
        </h1>

        <p className="mb-6 text-lg">
          Discover limited products and exclusive drops.
        </p>

        <button
          onClick={() => navigate("/flash-sale")}
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold"
        >
          Explore Drops
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
        className="w-[350px] rounded-xl"
      />

    </div>
  );
}

export default HeroBanner;