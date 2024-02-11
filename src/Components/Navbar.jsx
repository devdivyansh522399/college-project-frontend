import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-5 items-start mb-3 text-gray-700">
      <div className="">
        <h1 className="text-3xl font-bold">Good Morning Divyansh!</h1>
        <span>date is here</span>
      </div>
      <div className="flex flex-row space-x-3 justify-center items-center">
        <IoPerson className="bg-Blue h-8 w-8 p-1 rounded-full text-whiteLight" />
        <div className="flex flex-row justify-center items-center space-x-2">
          <span className="font-poppins font-bold text-lg">Divyansh</span>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
