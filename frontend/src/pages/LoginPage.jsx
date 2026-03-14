import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/drops");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-xl w-[350px] text-center">

        <h1 className="text-3xl text-yellow-400 mb-6">
          FlashDrop Login
        </h1>

        <input
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-800"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-6 p-2 rounded bg-slate-800"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;