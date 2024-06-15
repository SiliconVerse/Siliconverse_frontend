import React from "react";

const Button = ({ type, children }) => (
  <button
    type={type}
    className="bg-[#FF5F15] py-2 px-10 rounded-3xl text-white hover:bg-[#FF44510] transition duration-300"
  >
    {children}
  </button>
);

export default Button;
