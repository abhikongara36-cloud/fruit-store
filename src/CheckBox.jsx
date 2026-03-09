import React from "react";


const TextBox = ({ label, name, value, onChange, type = "text", required = true }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);
export default TextBox;