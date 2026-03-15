import Navbar from "../components/Navbar"
import FlashBanner from "../components/FlashBanner"
import ProductGrid from "../components/ProductGrid"

function FlashSale(){

  return(

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar/>

      <FlashBanner/>

      <h1 className="text-4xl text-center py-10 text-cyan-400">
        FLASH SALE
      </h1>

      <ProductGrid/>

    </div>

  )

}

export default FlashSale