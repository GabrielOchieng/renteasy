"use client";

import { useRouter } from "next/navigation";

const SearchedHouses = () => {
  const router = useRouter();
  console.log(router.prefetch);
  const searchTerm = router.query.searchTerm || "";

  return (
    <div className="mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-4">
        Available Properties -{" "}
        {searchTerm && `Search results for: ${searchTerm}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Conditionally render HouseCards or a message */}
        {searchTerm ? (
          // No need to fetch houses here, use searchTerm from query params
          <p>Looking for houses matching {searchTerm}...</p>
        ) : (
          <p>Enter a search term to find available properties.</p>
        )}
      </div>
    </div>
  );
};

export default SearchedHouses;
