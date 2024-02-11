import React from "react";
import SideNav from "../../Components/SideNav";

const HomePage = ({children}) => {
  return (
    <div>
      <SideNav />
      <div className="ml-56 my-5 font-poppins">{children}</div>
    </div>
  );
};

export default HomePage;
