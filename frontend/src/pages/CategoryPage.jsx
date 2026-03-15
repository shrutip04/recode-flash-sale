import { useState } from "react"
import Navbar from "../components/Navbar"
import ProductGrid from "../components/ProductGrid"

function CategoryPage(){

  const [category,setCategory] = useState("all")

  return(

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar/>

      <div className="max-w-7xl mx-auto px-10 py-16">

        <h1 className="text-4xl mb-10">
          PRODUCT <span className="text-cyan-400">CATEGORIES</span>
        </h1>

        <div className="flex gap-4 mb-10">

          <button
            onClick={()=>setCategory("all")}
            className="bg-slate-700 px-4 py-2 rounded"
          >
            All
          </button>

          <button
            onClick={()=>setCategory("sneakers")}
            className="bg-slate-700 px-4 py-2 rounded"
          >
            Sneakers
          </button>

          <button
            onClick={()=>setCategory("electronics")}
            className="bg-slate-700 px-4 py-2 rounded"
          >
            Electronics
          </button>

          <button
            onClick={()=>setCategory("collectibles")}
            className="bg-slate-700 px-4 py-2 rounded"
          >
            Collectibles
          </button>

          <button
            onClick={()=>setCategory("apparel")}
            className="bg-slate-700 px-4 py-2 rounded"
          >
            Apparel
          </button>

        </div>

        <ProductGrid category={category}/>

      </div>

    </div>

  )

}

export default CategoryPage