import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import QueueStatus from "../components/QueueStatus";
import LiveQueueFeed from "../components/LiveQueueFeed";

function DropPage() {

  return (

    <div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-10">

        <div className="col-span-2">

          <h1 className="text-4xl mb-10">
            PRODUCT <span className="neon">DROP</span>
          </h1>

          <ProductGrid />

        </div>

        <div className="space-y-6">

          <QueueStatus />

          <LiveQueueFeed />

        </div>

      </div>

    </div>

  );

}

export default DropPage;