import { useEffect, useState } from "react";

function CountdownTimer({ seconds, onComplete }) {

  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {

    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft]);

  return (
    <div className="text-center text-5xl font-bold text-yellow-400">
      {timeLeft}
    </div>
  );
}

export default CountdownTimer;