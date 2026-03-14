import { useNavigate } from "react-router-dom";

function DropPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl text-yellow-400 mb-8">
        Live Drops
      </h1>

      <div
        onClick={() => navigate("/flash-sale")}
        className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 transition"
      >
        🔥 Midnight Sneaker Drop
      </div>

    </div>
  );
}

export default DropPage;