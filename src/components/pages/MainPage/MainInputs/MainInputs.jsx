// В новом файле InputField.jsx
import React from "react";

const MainInputs = ({ value, onChange, placeholder, maxLength }) => {
  return (
    <input
      className="input1"
      type="text"
      name="input1"
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
};

export default MainInputs;
