function QueueStatus(){

return(

<div className="card p-6 w-[320px]">

<h2 className="mb-4 font-semibold">
QUEUE STATUS
</h2>

<p className="text-gray-400 mb-2">
Your position
</p>

<p className="text-3xl neon mb-4">
#2460
</p>

<div className="h-2 bg-slate-700 rounded mb-4">

<div className="h-2 bg-cyan-400 rounded w-[40%]" />

</div>

<div className="flex justify-between text-sm">

<span>Total in queue</span>

<span>5300</span>

</div>

<div className="flex justify-between text-sm mt-2">

<span>Est wait</span>

<span>25s</span>

</div>

</div>

)

}

export default QueueStatus