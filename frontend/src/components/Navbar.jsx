import { Link } from "react-router-dom"

function Navbar() {

  return (

    <header className="w-full border-b border-[#1f2937] bg-[#0b0f14]">

      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wider text-cyan-400">
          MIDNIGHTDROP
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm text-gray-300">

          <Link
            to="/"
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/drop"
            className="hover:text-cyan-400 transition-colors"
          >
            The Drop
          </Link>

          <Link
            to="/flash"
            className="hover:text-cyan-400 transition-colors"
          >
            Flash Sale
          </Link>

          <Link
            to="/queue"
            className="hover:text-cyan-400 transition-colors"
          >
            Queue
          </Link>

        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Live users */}
          <div className="bg-[#111827] border border-[#1f2937] px-3 py-1 rounded-full text-sm text-gray-300">
            🟢 3,186 live
          </div>

          {/* Login */}
          <Link
            to="/login"
            className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all"
          >
            Login
          </Link>

          <Link to="/checkout">🛒</Link>

        </div>

      </div>

    </header>

  )

}

export default Navbar