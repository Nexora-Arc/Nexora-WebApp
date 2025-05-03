import React from "react";
import logo from "../../assets/Logo-2.png";

const Logo = ({ className }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${
        className || "h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40"
      }`}
    >
      <img
        src={logo}
        alt="Nexora Arc Logo"
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 shadow-md rounded-full"
      />
    </div>
  );
};

export default Logo;
