import React from "react";

const HouseDetailsSkeleton = () => {
  return (
    <div className="flex flex-col p-8 mx-auto animate-pulse">
      {/* Title */}
      <div className="w-1/3 h-8 bg-gray-300 rounded mb-4 animate-pulse"></div>

      {/* Images */}
      <div className="flex gap-3 flex-wrap animate-pulse">
        <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
        <div className="w-full h-96 bg-gray-300 rounded-lg mt-4"></div>
        <div className="w-full h-96 bg-gray-300 rounded-lg mt-4"></div>
      </div>

      {/* Details Section */}
      <div className="mt-4 flex justify-between lg:justify-evenly border space-y-4 flex-wrap md:flex-nowrap rounded px-4 lg:px-8 py-4 animate-pulse">
        <div className="w-full h-64 bg-gray-300 rounded-lg"></div>{" "}
        {/* Map placeholder */}
        <div className="flex flex-col space-y-4">
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
          <div className="w-full h-6 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Seller Information Section */}
      <div className="mt-4 flex flex-col space-y-4 animate-pulse">
        <button className="w-1/3 h-8 bg-gray-300 rounded"></button>
        <div className="w-full flex justify-between border rounded items-center p-4">
          <div className="h-48 w-48 bg-gray-300 rounded-full"></div>
          <div className="w-full h-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailsSkeleton;
