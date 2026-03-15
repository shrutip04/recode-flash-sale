import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import CategoryRow from "../components/CategoryRow"
import ProductGrid from "../components/ProductGrid"

function HomePage() {

  return (

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar />

      <HeroBanner />

      <CategoryRow />

      <ProductGrid />

    </div>

  )

}

export default HomePage