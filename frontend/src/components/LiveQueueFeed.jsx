function LiveQueueFeed() {

  const activity = [
    { user:"USR-VQX05", product:"STEALTH HOODIE V2", status:"WAITING" },
    { user:"USR-WRWK3", product:"NOVA HEADSET PRO", status:"PROCESSING" },
    { user:"USR-PPD7U", product:"STEALTH HOODIE V2", status:"SUCCESS" },
    { user:"USR-RRAQP", product:"PHANTOM X1", status:"FAILED" },
    { user:"USR-DHF4N", product:"NOVA HEADSET PRO", status:"FAILED" }
  ];

  return (

    <div className="bg-slate-800 p-6 rounded-xl">

      <h2 className="text-lg mb-4 text-yellow-400">
        LIVE QUEUE FEED
      </h2>

      <div className="space-y-3">

        {activity.map((item,i)=> (

          <div
            key={i}
            className="flex justify-between bg-slate-700 p-3 rounded text-sm"
          >

            <span className="text-gray-400">
              {item.user}
            </span>

            <span>
              {item.product}
            </span>

            <span
              className={
                item.status==="SUCCESS"
                ? "text-green-400"
                : item.status==="FAILED"
                ? "text-red-400"
                : item.status==="PROCESSING"
                ? "text-cyan-400"
                : "text-gray-400"
              }
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default LiveQueueFeed;