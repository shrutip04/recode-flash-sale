import Navbar from "../components/Navbar";
import QueueStatus from "../components/QueueStatus";
import LiveQueueFeed from "../components/LiveQueueFeed";

function QueuePage() {

  return (

    <div className="grid-bg min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto py-20 space-y-10">

        <QueueStatus />

        <LiveQueueFeed />

      </div>

    </div>

  );

}

export default QueuePage;