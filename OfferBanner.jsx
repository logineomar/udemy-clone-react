import { useState, useEffect } from "react";

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 56,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-banner">
      <span>New-learner offer | Courses from E£269.99</span>
      <span className="timer">
        Ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
      <button className="redeem-btn">Click to redeem</button>
    </div>
  );
}
