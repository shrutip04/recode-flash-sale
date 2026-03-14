import { useNavigate } from "react-router-dom";

function QueuePage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl text-yellow-400 mb-4">
        Waiting in Queue
      </h1>

      <p className="text-gray-400 mb-6">
        Your position: 12
      </p>

      <button
        onClick={() => navigate("/checkout")}
        className="bg-yellow-400 px-6 py-2 rounded"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}

export default QueuePage;