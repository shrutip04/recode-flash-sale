function QueueStatus() {

  const position = 2460;
  const totalQueue = 5300;
  const waitTime = 25;

  return (

    <div className="bg-slate-800 p-6 rounded-xl">

      <h2 className="text-lg mb-4 text-cyan-400">
        QUEUE STATUS
      </h2>

      <div className="text-gray-400 text-sm">
        Your position
      </div>

      <div className="text-3xl font-bold mb-4">
        #{position}
      </div>

      <div className="h-2 bg-slate-700 rounded mb-6">

        <div
          className="h-2 bg-cyan-400 rounded"
          style={{ width: "60%" }}
        />

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-700 p-3 rounded">

          <div className="text-sm text-gray-400">
            Total in queue
          </div>

          <div className="text-lg font-semibold">
            {totalQueue}
          </div>

        </div>

        <div className="bg-slate-700 p-3 rounded">

          <div className="text-sm text-gray-400">
            Est. wait
          </div>

          <div className="text-lg font-semibold">
            {waitTime}s
          </div>

        </div>

      </div>

    </div>

  );

}

export default QueueStatus;