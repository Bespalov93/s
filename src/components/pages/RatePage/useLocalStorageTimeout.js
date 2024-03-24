// useLocalStorageTimeout.js
import { useEffect, useState } from "react";

export default function useLocalStorageTimeout(timeoutDuration, callback) {
  const [lastChangeTime, setLastChangeTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastChangeTime > timeoutDuration) {
        localStorage.clear();
        callback();
      }
    }, 10000); // Проверяем каждые 10 секунд

    return () => clearInterval(intervalId);
  }, [lastChangeTime, timeoutDuration, callback]);

  return setLastChangeTime;
}
