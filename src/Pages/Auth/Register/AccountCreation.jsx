import React from "react";
import ProgressStep from "./ProgressStep";
const AccountCreation = ({ step, stepHandler }) => {
  return (
    <>
      <ProgressStep step={step} />
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
              placeholder="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
            />
          </div>
          <div className="flex items-center justify-center rounded">
            <button
              type="submit"
              className=" w-1/3 text-white bg-opacity-90 bg-Blue hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={() => stepHandler(1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreation;
