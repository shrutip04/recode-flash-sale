import Navbar from "../components/Navbar"
import ProductGrid from "../components/ProductGrid"
import QueueStatus from "../components/QueueStatus"
import LiveQueueFeed from "../components/LiveQueueFeed"
import LivePurchaseFeed from "../components/LivePurchaseFeed"
import CountdownTimer from "../components/CountdownTimer"

function DropPage() {

  return (

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-10">

        <div className="col-span-2">

          <h1 className="text-4xl mb-10">
            PRODUCT <span className="text-cyan-400">DROP</span>
          </h1>

          <ProductGrid />

        </div>

        <div className="space-y-6">

          <QueueStatus />

          <LiveQueueFeed />
          <LivePurchaseFeed/>

        </div>

      </div>

    </div>

  )

}

<LivePurchaseFeed/>
export default DropPage