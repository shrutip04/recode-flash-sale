import { useEffect, useState } from "react"

function QueueStatus() {

  const totalQueue = 5300

  const [position,setPosition] = useState(2460)
  const [waitTime,setWaitTime] = useState(25)

  const progress = ((totalQueue - position) / totalQueue) * 100

  useEffect(()=>{

    const interval = setInterval(()=>{

      setPosition(prev => {

        if(prev <= 1) return 1

        // move queue faster so UI change is visible
        const move = Math.floor(Math.random()*80)+40

        return prev - move

      })

      setWaitTime(prev => prev > 0 ? prev - 1 : 0)

    },2000)

    return ()=> clearInterval(interval)

  },[])

  return (

    <div className="bg-[#0b0f14] border border-[#1f2937] p-6 rounded-xl">

      <h2 className="text-lg mb-5 text-cyan-400 font-semibold">
        QUEUE STATUS
      </h2>

      <div className="text-gray-400 text-sm mb-1">
        Your position
      </div>

      <div className="text-3xl font-bold text-white mb-4">
        #{position}
      </div>

      {/* Progress Bar */}

      <div className="h-3 bg-slate-700 rounded mb-6 overflow-hidden">

        <div
          className="h-3 bg-cyan-400 rounded transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-[#111827] border border-[#1f2937] p-3 rounded">

          <div className="text-sm text-gray-400">
            Total in queue
          </div>

          <div className="text-lg font-semibold text-white">
            {totalQueue}
          </div>

        </div>

        <div className="bg-[#111827] border border-[#1f2937] p-3 rounded">

          <div className="text-sm text-gray-400">
            Est. wait
          </div>

          <div className="text-lg font-semibold text-white">
            {waitTime}s
          </div>

        </div>

      </div>

    </div>

  )

}

export default QueueStatus