import { useEffect, useState } from "react";

function CountdownTimer() {
  const targetTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes

  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetTime - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-3xl font-bold text-red-400 mb-6">
      Drop in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default CountdownTimer;