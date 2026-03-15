import { useEffect, useState } from "react"

function CountdownTimer({ setDropLive }){

const [timeLeft,setTimeLeft] = useState(60)

useEffect(()=>{

const timer = setInterval(()=>{

setTimeLeft(prev => {

if(prev <= 1){

setDropLive(true)
return 0

}

return prev - 1

})

},1000)

return ()=> clearInterval(timer)

},[])

if(timeLeft === 0){

return(

<div className="text-green-400 text-xl text-center mb-10">
DROP IS LIVE
</div>

)

}

const minutes = Math.floor(timeLeft/60)
const seconds = timeLeft % 60

return(

<div className="flex justify-center gap-8 text-3xl text-cyan-400 mb-12">

<div className="bg-[#0b0f14] border border-cyan-400 px-6 py-3 rounded-lg">
{minutes}m
</div>

<div className="bg-[#0b0f14] border border-cyan-400 px-6 py-3 rounded-lg">
{seconds}s
</div>

</div>

)

}

export default CountdownTimer