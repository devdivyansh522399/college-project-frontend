import React from "react";
import Profile from "./Component/Profile";
import HomePage from "../HomePage";
import Navbar from "../../../Components/Navbar";
const Doctor = () => {
  return (
    <HomePage>
      <Navbar />
      <div className="flex flex-row p-3 flex-wrap justify-evenly">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </HomePage>
  );
};

export default Doctor;
