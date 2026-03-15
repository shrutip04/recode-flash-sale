import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import QueueStatus from "../components/QueueStatus"

function DropPage(){

const products=[
{
name:"Phantom X1",
price:349,
description:"Ultra limited sneaker",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
name:"Nova Headset Pro",
price:199,
description:"Spatial audio headset",
image:"https://images.unsplash.com/photo-1518441902110-27c7d3b8b1b1"
}
]

return(

<div>

<Navbar/>

<div className="flex gap-10 p-10">

<div className="flex gap-6">

{products.map(p=>(
<ProductCard product={p}/>
))}

</div>

<QueueStatus/>

</div>

</div>

)

}

export default DropPage