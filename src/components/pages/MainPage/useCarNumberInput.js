// useCarNumberInput.js
import { useState, useEffect } from "react";

export default function useCarNumberInput() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('car_number')?.toUpperCase() || '');
  const [isInputFilled, setIsInputFilled] = useState(inputValue.trim() !== '');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      clearInputAndLocalStorage();
    }, 300000); // 5 minutes
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleInputChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    setInputValue(newValue);
    localStorage.setItem('car_number', newValue);
    setIsInputFilled(newValue.trim() !== '');
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      localStorage.setItem('car_number', inputValue);
    }
  };

  const clearInputAndLocalStorage = () => {
    setInputValue('');
    localStorage.removeItem('car_number');
  };

  return { inputValue, isInputFilled, handleInputChange, handleClick };
}
