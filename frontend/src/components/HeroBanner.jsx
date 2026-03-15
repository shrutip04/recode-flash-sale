function HeroBanner() {

  return (

    <section className="relative text-center pt-28 pb-32 px-6">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]"></div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-white">
        THE MIDNIGHT
      </h1>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
        PRODUCT DROP
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
        Thousands arrive. Only a few leave with the prize.
        When the clock hits zero, the gate opens.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-[0_0_12px_rgba(0,255,255,0.35)]">
          ENTER THE DROP →
        </button>

        <button className="border border-gray-600 hover:border-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
          VIEW PRODUCTS
        </button>

      </div>

    </section>

  )

}

export default HeroBanner