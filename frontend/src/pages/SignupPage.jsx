import { useNavigate } from "react-router-dom";

function SignupPage() {

  const navigate = useNavigate();

  const handleSignup = () => {
    // later this will call backend API
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-xl w-[350px] text-center">

        <h1 className="text-3xl text-yellow-400 mb-6">
          FlashDrop Signup
        </h1>

        <input
          placeholder="Name"
          className="w-full mb-3 p-2 rounded bg-slate-800"
        />

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
          onClick={handleSignup}
          className="w-full bg-yellow-400 text-black py-2 rounded mb-4"
        >
          Create Account
        </button>

        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default SignupPage;