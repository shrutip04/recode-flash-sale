import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-900 px-8 py-4 flex items-center justify-between">

      <h1
        onClick={() => navigate("/home")}
        className="text-yellow-400 text-2xl font-bold cursor-pointer"
      >
        FlashDrop
      </h1>

      <input
        placeholder="Search products..."
        className="bg-slate-800 px-4 py-2 rounded w-[400px]"
      />

      <div className="flex gap-6">

        <button
          onClick={() => navigate("/home")}
          className="text-white hover:text-yellow-400"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/flash-sale")}
          className="text-white hover:text-yellow-400"
        >
          Drops
        </button>

      </div>

    </div>
  );
}

export default Navbar;