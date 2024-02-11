import React from "react";

const Profile = () => {
  return (
    <div className="container lg:w-1/5 xl:w-1/7 sm:w-full md:w-1/3 bg-white shadow-lg transform duration-200 easy-in-out mx-2 my-2">
      <div className="flex justify-center px-5">
        <img
          className="h-32 w-32 bg-white p-2 rounded-full   "
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
          <a
            className="text-gray-400 mt-2 hover:text-blue-500"
            href="https://www.instagram.com/immohitdhiman/"
            target="BLANK()"
          >
            @immohitdhiman
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button className="mt-5 text-white bg-opacity-90 bg-Blue hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Profile;
