import React from "react";
import {
  FaUserMd,
  FaMoneyCheck,
  FaBell,
  FaHome,
} from "react-icons/fa";
import { ImAidKit } from "react-icons/im";
import { IoFlaskSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiRobot2Fill } from "react-icons/ri";
import images from "../constants/images";
const NavItems = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Doctor", icon: <FaUserMd /> },
  { name: "Notification", icon: <FaBell /> },
  { name: "Pharmacy", icon: <ImAidKit /> },
  { name: "Virtual Labs", icon: <IoFlaskSharp /> },
];
const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 w-56 h-screen z-40  border-r border-gray-200">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <div className="pt-5 pb-3">
          <img
            src={images.logo}
            className="h-32 w-28 mx-auto opacity-90"
            alt=""
          />
        </div>
        <ul className="space-y-2 font-medium px-2">
          {NavItems.map((item) => (
            <li key={item.name}>
              <Link className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-Blue hover:text-whiteLight text-lg">
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-5 pb-4 overflow-y-auto bg-white font-medium absolute bottom-0 w-full">
        <Link className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-Blue hover:text-whiteLight text-lg">
          <RiRobot2Fill />
          <span className="ml-3">Support</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
