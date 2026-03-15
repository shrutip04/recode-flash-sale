import { useEffect, useState } from "react"

function CountdownTimer({ targetTime }) {

  const calculate = () => {
    const diff = new Date(targetTime) - new Date()
    if (diff <= 0) return null

    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  const [timeLeft,setTimeLeft] = useState(calculate())

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeLeft(calculate())
    },1000)

    return ()=> clearInterval(timer)
  },[])

  if(!timeLeft){
    return(
      <div className="text-green-400 text-xl text-center mb-8">
        DROP IS LIVE
      </div>
    )
  }

  return(

    <div className="flex justify-center gap-6 mb-10 text-xl">

      <div>{timeLeft.hours}h</div>
      <div>{timeLeft.minutes}m</div>
      <div>{timeLeft.seconds}s</div>

    </div>

  )

}

export default CountdownTimer