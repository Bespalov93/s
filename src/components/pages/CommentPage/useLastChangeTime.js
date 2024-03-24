// useLastChangeTime.js
import { useState, useEffect } from "react";

export default function useLastChangeTime() {
  const [lastChangeTime, setLastChangeTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastChangeTime > 300000) { // 5 минут в миллисекундах
        localStorage.clear();
        window.location.href = '/feedback/';
      }
    }, 10000); // Проверяем каждые 10 секунд
    return () => clearInterval(intervalId);
  }, [lastChangeTime]);

  return { lastChangeTime, setLastChangeTime };
}
