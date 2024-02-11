import React from "react";
import images from "../../../../constants/images";

const NavbarDashboard = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="mx-5 p-3 w-3/5 font-roboto space-y-5">
        <div>
          <h1 className="text-2xl font-bold">
            Find best doctors with Mycare 😊
          </h1>
          <h1 className="font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            ipsa aliquid. Quod labore nulla maiores ea perferendis dolorum,
            cupiditate praesentium!
          </h1>
        </div>
        <button className="mt-5 text-Blue bg-opacity-90 bg-white hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          Book Appointment
        </button>
      </div>
      <div className="w-2/5 flex flex-row justify-center ">
        <img src={images.dashboard1} alt="" className="h-60 w-60" />
      </div>
    </div>
  );
};

export default NavbarDashboard;
