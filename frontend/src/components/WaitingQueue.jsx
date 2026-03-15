function WaitingQueue(){

  const items = [
    {user:"USR-XP393",product:"Cyber Chrono",status:"FAILED"},
    {user:"USR-3UD2E",product:"Stealth Hoodie",status:"SUCCESS"},
    {user:"USR-7BWH2",product:"Cyber Chrono",status:"SUCCESS"}
  ]

  return(

    <div className="bg-[#0b0f14] border border-[#1f2937] p-6 rounded-xl">

      <h2 className="mb-5 text-yellow-400 font-semibold">
        LIVE QUEUE FEED
      </h2>

      <div className="space-y-3">

        {items.map((i,index)=>(

          <div
            key={index}
            className="flex justify-between bg-[#111827] border border-[#1f2937] px-4 py-2 rounded text-sm"
          >

            <span className="text-gray-400 font-mono">
              {i.user}
            </span>

            <span className="text-white">
              {i.product}
            </span>

            <span className={i.status==="SUCCESS"?"text-green-400":"text-red-400"}>
              {i.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  )

}

export default WaitingQueue