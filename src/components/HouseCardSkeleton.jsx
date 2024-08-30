import React from "react";

const HouseCardSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between px-6 py-10 ">
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2 animate-pulse w-[100%] md:w-[30%]">
        {/* Skeleton for the image */}
        <div className="w-full h-96 bg-gray-300 rounded-t-md"></div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>
      </div>
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2 animate-pulse w-[100%] md:w-[30%]">
        {/* Skeleton for the image */}
        <div className="w-full h-96 bg-gray-300 rounded-t-md"></div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>
      </div>
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2 animate-pulse w-[100%] md:w-[30%]">
        {/* Skeleton for the image */}
        <div className="w-full h-96 bg-gray-300 rounded-t-md"></div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
        </div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>

        <div className="w-full h-12 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default HouseCardSkeleton;
