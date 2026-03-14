function FlashSale() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-5xl font-bold mb-6 text-yellow-400">
        🔥 Midnight Product Drop
      </h1>

      <p className="text-gray-400 mb-10">
        Limited edition release. First come, first served.
      </p>

      <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 w-[320px] hover:scale-105 transition duration-300">

        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
          alt="Sneakers"
          className="rounded-lg mb-4"
        />

        <h2 className="text-xl font-semibold mb-2">
          Limited Edition Sneakers
        </h2>

        <p className="text-gray-400 mb-2">$99</p>

        <p className="text-green-400 mb-4">
          Stock: 50
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default FlashSale;