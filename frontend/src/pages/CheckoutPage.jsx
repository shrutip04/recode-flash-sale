function CheckoutPage() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl text-yellow-400 mb-6">
        Checkout
      </h1>

      <div className="bg-slate-900 p-8 rounded-xl w-[350px]">

        <p className="mb-4">Product: Limited Sneakers</p>

        <p className="mb-4">Price: $99</p>

        <button className="w-full bg-green-500 py-2 rounded">
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default CheckoutPage;