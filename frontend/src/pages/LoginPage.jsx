function LoginPage() {

  return (

    <div className="flex justify-center items-center min-h-screen grid-bg">

      <div className="bg-slate-800 p-10 rounded-xl w-96">

        <h1 className="text-2xl mb-6 text-center">
          SIGN IN
        </h1>

        <input
          className="w-full p-3 mb-4 bg-slate-700 rounded"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full p-3 mb-6 bg-slate-700 rounded"
          placeholder="Password"
        />

        <button className="primary-btn w-full">
          ENTER
        </button>

      </div>

    </div>

  );

}

export default LoginPage;