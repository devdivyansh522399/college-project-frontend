import React from "react";
import images from "../../../../constants/images";
import { HiDotsVertical } from "react-icons/hi";
const Reports = () => {
  return (
    <div className="bg-white px-6 py-4 rounded-lg flex flex-row justify-start items-center max-w-[200px] relative text-gray-800 space-x-5 shadow">
      <div className="rounded-full">
        <img src={images.reportImage} alt="" className="w-12 h-12" />
      </div>
      <div>
        <h4 className="font-bold text-md">Reports</h4>
        <p className="text-gray-500 italic text-sm">15-10-2023 </p>
      </div>
      <div className="absolute top-1 right-1">
        <button>
          <HiDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default Reports;
