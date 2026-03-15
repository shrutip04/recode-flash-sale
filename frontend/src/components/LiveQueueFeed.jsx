function LiveQueueFeed() {

  const activity = [
    { user: "USR-VQX05", product: "STEALTH HOODIE V2", status: "WAITING" },
    { user: "USR-WRWK3", product: "NOVA HEADSET PRO", status: "PROCESSING" },
    { user: "USR-PPD7U", product: "STEALTH HOODIE V2", status: "SUCCESS" },
    { user: "USR-RRAQP", product: "PHANTOM X1", status: "FAILED" },
    { user: "USR-DHF4N", product: "NOVA HEADSET PRO", status: "FAILED" }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "SUCCESS":
        return "text-green-400"
      case "FAILED":
        return "text-red-400"
      case "PROCESSING":
        return "text-cyan-400"
      default:
        return "text-gray-400"
    }
  }

  return (

    <div className="bg-[#0b0f14] border border-[#1f2937] rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-5 text-yellow-400 tracking-wide">
        LIVE QUEUE FEED
      </h2>

      <div className="space-y-3">

        {activity.map((item, i) => (

          <div
            key={i}
            className="flex items-center justify-between bg-[#111827] border border-[#1f2937] px-4 py-3 rounded-lg text-sm"
          >

            <span className="text-gray-400 font-mono">
              {item.user}
            </span>

            <span className="text-white text-center flex-1">
              {item.product}
            </span>

            <span className={`font-semibold ${getStatusColor(item.status)}`}>
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  )
}

export default LiveQueueFeed