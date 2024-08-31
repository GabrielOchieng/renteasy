import React from "react";
import { Link } from "react-router-dom";
import { CgUnavailable } from "react-icons/cg";

const NoHomesFound = ({ resetFilters }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <div className="flex items-center">
          <CgUnavailable className="text-6xl text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-800">Item Not Found</h1>
        </div>

        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn't find any items that match your search.
        </p>
        <p className="text-gray-600 mb-6">Here are a few things you can try:</p>
        <ul className="list-disc list-inside text-left mx-auto mb-8 max-w-md">
          <li className="mb-2">Adjust your search filters</li>
          <li>Check the spelling of your search term</li>
        </ul>
        <Link
          onClick={resetFilters}
          to="/houses"
          className="inline-block bg-green-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-600 transition"
        >
          Try Again
        </Link>
      </div>
    </section>
  );
};

export default NoHomesFound;
