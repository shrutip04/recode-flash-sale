import { useEffect, useState } from "react";

function CountdownTimer({ onComplete }) {

  const targetTime = new Date().getTime() + 5 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {

    const interval = setInterval(() => {

      const remaining = targetTime - new Date().getTime();

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        if (onComplete) onComplete(true);
      } else {
        setTimeLeft(remaining);
      }

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-3xl font-bold text-red-400 mb-6">
      {timeLeft > 0
        ? `Drop in: ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        : "🔥 Drop Live!"}
    </div>
  );
}

export default CountdownTimer;