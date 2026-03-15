import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

function ProductPage(){

  const product = {
    id:1,
    name:"Phantom X1",
    price:349,
    description:"Ultra limited sneaker",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    stock:20,
    totalStock:50
  }

  return(

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar/>

      <div className="flex justify-center pt-20">

        <ProductCard product={product}/>

      </div>

    </div>

  )

}

export default ProductPage