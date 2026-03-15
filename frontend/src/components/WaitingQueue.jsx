function WaitingQueue(){

const items = [
{user:"USR-XP393",product:"Cyber Chrono",status:"FAILED"},
{user:"USR-3UD2E",product:"Stealth Hoodie",status:"SUCCESS"},
{user:"USR-7BWH2",product:"Cyber Chrono",status:"SUCCESS"}
]

return(

<div className="card p-6">

<h2 className="mb-4">
LIVE QUEUE FEED
</h2>

{items.map((i,index)=>(

<div key={index} className="flex justify-between border-b border-slate-800 py-2">

<span>{i.user}</span>

<span>{i.product}</span>

<span className={i.status==="SUCCESS"?"text-green-400":"text-red-400"}>
{i.status}
</span>

</div>

))}

</div>

)

}

export default WaitingQueue