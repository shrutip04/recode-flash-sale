import products from "../data/products"

function HomePage() {

  return (

    <div className="p-10">

      <h1 className="text-4xl text-yellow-400 mb-8">
        Marketplace
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map((product) => (

          <div key={product.id} className="bg-slate-900 p-4 rounded-xl">

            <img src={product.image} className="rounded mb-3"/>

            <h3 className="text-lg">{product.name}</h3>

            <p className="text-gray-400">${product.price}</p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default HomePage