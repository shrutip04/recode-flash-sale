import { useEffect, useState } from "react"

function CountdownTimer({ targetTime }) {

  const calculateTimeLeft = () => {
    const difference = new Date(targetTime) - new Date()

    if (difference <= 0) {
      return null
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return (
      <div className="text-green-400 font-semibold text-lg">
        LIVE NOW
      </div>
    )
  }

  return (
    <div className="flex gap-6 justify-center items-center text-white">

      <TimeBlock value={timeLeft.hours} label="HRS" />
      <TimeBlock value={timeLeft.minutes} label="MIN" />
      <TimeBlock value={timeLeft.seconds} label="SEC" />

    </div>
  )
}

function TimeBlock({ value, label }) {
  return (
    <div className="text-center">

      <div className="bg-[#0b0f14] border border-cyan-400/30 rounded-lg px-5 py-3 text-2xl font-bold text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.15)]">
        {value.toString().padStart(2, "0")}
      </div>

      <p className="text-xs text-gray-400 mt-1">
        {label}
      </p>

    </div>
  )
}

export default CountdownTimer