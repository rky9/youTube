import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-100 rounded-lg w-full">{name}</button>
    </div>
  );
};

export default Button;
