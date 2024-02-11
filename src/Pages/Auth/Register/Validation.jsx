import React from "react";
import ProgressStep from "./ProgressStep";
import OTP from "../../../Components/OTP"

const Validation = ({step, stepHandler}) => {
  return (
    <>
        <ProgressStep currStep={step} />
        <div className="space-y-4 md:space-y-6 flex flex-col items-center justify-center rounded">
          <div className="flex items-center justify-center rounded">
           <OTP/>
          </div>
          <button
            type="submit"
            className=" w-1/3 text-white bg-opacity-90 bg-Blue hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={() => stepHandler(2)}
          >
            Next
          </button>
      </div>
    </>
  );
};

export default  Validation ;
