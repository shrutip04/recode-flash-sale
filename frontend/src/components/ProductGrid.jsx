import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

function ProductGrid({ dropLive }){

const initialProducts = [

{
id:1,
name:"Phantom X1",
price:349,
description:"Ultra limited sneaker",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
stock:20,
totalStock:50
},

{
id:2,
name:"Nova Headset Pro",
price:199,
description:"Gaming headset",
image:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
stock:15,
totalStock:40
},

{
id:3,
name:"Stealth Hoodie V2",
price:129,
description:"Limited drop hoodie",
image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
stock:30,
totalStock:60
},

{
id:4,
name:"Cyber Chrono",
price:499,
description:"Collector watch",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
stock:12,
totalStock:30
}

]

const [products,setProducts] = useState(initialProducts)

useEffect(()=>{

const interval = setInterval(()=>{

setProducts(prev =>

prev.map(product =>{

if(product.stock > 0 && Math.random() > 0.7){

return {
...product,
stock:product.stock - 1
}

}

return product

})

)

},3000)

return ()=> clearInterval(interval)

},[])

const reduceStock = (productId)=>{

setProducts(prev =>

prev.map(product =>

product.id === productId && product.stock > 0
? {...product,stock:product.stock - 1}
: product

)

)

}

return(

<div className="max-w-[1200px] mx-auto px-6 pb-20">

<h2 className="text-3xl mb-10 text-center text-white">
TONIGHT'S <span className="text-cyan-400">DROPS</span>
</h2>

<div className="grid grid-cols-4 gap-8 justify-items-center">

{products.map(product => (

<ProductCard
key={product.id}
product={product}
reduceStock={reduceStock}
dropLive={dropLive}
/>

))}

</div>

</div>

)

}

export default ProductGrid