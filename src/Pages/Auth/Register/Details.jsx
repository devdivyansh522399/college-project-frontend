import React from "react";
import ProgressStep from "./ProgressStep";
const Details = ({ step, stepHandler }) => {
  return (
    <>
      <ProgressStep currStep={step} />
      <div className="space-y-4 md:space-y-6">
        <form className="space-y-4 md:space-y-6" action="/">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
              placeholder="phone"
              maxLength={10}
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block mb-2 font-medium text-gray-900 "
            >
              Your Age
            </label>
            <input
              type="tel"
              name="age"
              id="age"
              className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
              placeholder="Age"
              maxLength={2}
              min={1}
              max={99}
            />
          </div>
          <div>
            <label
              htmlFor="City/Town"
              className="block mb-2 font-medium text-gray-900 "
            >
              City or Town
            </label>
            <input
              type="text"
              name="City/Town"
              id="City/Town"
              placeholder="City.."
              className="  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="address"
              name="address"
              id="address"
              placeholder="Address.."
              className="  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-200"
            />
          </div>
          <div className="flex items-center justify-center rounded">
            <button
              type="submit"
              className=" w-1/3 text-white bg-opacity-90 bg-Blue hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Details;
