import Navbar from "../components/Navbar"
import QueueStatus from "../components/QueueStatus"
import LiveQueueFeed from "../components/LiveQueueFeed"

function QueuePage() {

  return (

    <div className="min-h-screen bg-[#0b0f14] text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto py-20 space-y-10">

        <QueueStatus />

        <LiveQueueFeed />

      </div>

    </div>

  )

}

export default QueuePage