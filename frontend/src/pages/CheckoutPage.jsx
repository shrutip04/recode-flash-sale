import Navbar from "../components/Navbar";

function CheckoutPage(){

return(

<div>

<Navbar/>

<div className="flex justify-center pt-20">

<div className="card p-8 w-[600px]">

<h1 className="text-3xl neon mb-6">
CHECKOUT
</h1>

<p className="text-gray-400 mb-4">
Cart Empty
</p>

<button className="primary-btn">
Browse Drops
</button>

</div>

</div>

</div>

)

}

export default CheckoutPage;