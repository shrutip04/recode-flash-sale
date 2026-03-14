import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/home?search=${query}`);
    }
  };

  return (
    <div className="w-full bg-slate-900 px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <h1
        onClick={() => navigate("/home")}
        className="text-yellow-400 text-2xl font-bold cursor-pointer"
      >
        FlashDrop
      </h1>

      {/* Search Bar */}
      <input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        className="bg-slate-800 px-4 py-2 rounded w-[400px]"
      />

      {/* Navigation */}
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

        <button
          onClick={() => navigate("/checkout")}
          className="text-white hover:text-yellow-400"
        >
          Cart
        </button>

      </div>

    </div>
  );
}

export default Navbar;