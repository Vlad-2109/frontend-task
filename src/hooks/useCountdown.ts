import { useCallback, useEffect, useState } from "react";
import type { Countdown } from "../types";

export function useCountdown(promotionEndDate: Date): Countdown {
  const calculateTimeLeft = useCallback((): Countdown => {
    const now = Date.now();
    const diff = promotionEndDate.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds, isFinished: false };
  }, [promotionEndDate]);

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return timeLeft;
}
