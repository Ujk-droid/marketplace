import React from 'react';
import { PiDotsNineBold } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { MdFormatLineSpacing } from "react-icons/md";

const Fil = () => {
  return (
    <div className="h-[100px] bg-[#FDF7F4] px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col sm:flex-row align-center justify-between gap-4">                             
        {/* Left Section */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-10">
          <MdFormatLineSpacing className="text-3xl text-gray-600" />
          <div className="text-sm sm:text-base text-gray-800 font-medium">Filter</div>
          <PiDotsNineBold className="text-3xl text-gray-600" />
          <PiPackage className= "text-3xl  text-gray-600" />
          <div className=" h-[22px] w-[2px] bg-black"></div>
          <div className="text-3xl sm:text-base text-gray-800 font-medium">Lorem ipsum dolor sit.</div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between gap-4 mt-4 sm:mt-10">
          <div className=" text-3xl  sm:text-base text-gray-800 font-medium">Show</div>
          <button className=" text-1xl px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-800 hover:bg-gray-100 hover:shadow-lg transition duration-200">
            16
          </button>
          <div className="text-3xl sm:text-base text-gray-800 font-medium">Sort by</div>
          <button className=" text-1xl px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-800 hover:bg-gray-100 hover:shadow-lg transition duration-200">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fil;