import React from "react";

// this button called react function component
const Button = ({ text, onClick, type = "button", variant}) => (
  <button type={type} onClick={onClick} className={variant}>
    {text}
  </button>
);
export default Button;