import React from "react";

const Input = ({ type, name, placeholder, value, onchange }) => (
  <div>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onchange={onchange}
    />
  </div>
);

export default Input;
