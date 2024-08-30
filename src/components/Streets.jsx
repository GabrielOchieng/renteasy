import { useState } from "react";
import { Link } from "react-router-dom";

const townsTitle = "Towns";
const estatesTitle = "Estates";
const typesTitle = "Property Types";
const priceRangeTitle = "Maximum Price";

const towns = [
  "Nairobi",
  "Kisumu",
  "Mombasa",
  "Nakuru",
  "Eldoret",
  "Naivasha",
  "Machakos",
  "Busia",
  "Kakamega",
  "Dodoma",
  "Kampala",
];

const types = [
  "BedSitter",
  "Single",
  "One Bedroom",
  "Two Bedroom",
  "Three Bedroom",
  "Four Bedroom",
  "Home",
  "Apartment",
];

const priceRange = [
  "1000",
  "3000",
  "5000",
  "8000",
  "10000",
  "13000",
  "15000",
  "20000",
  "25000",
  "30000",
  "35000",
  "40000",
  "50000",
  "70000",
  "100000",
  "150000",
];

const estates = [
  "Donholm",
  "Kitengela",
  "Kahawa",
  "Utawala",
  "Buruburu",
  "Kilimani",
  "Kawangware",
  "Ngong",
  "Karen",
  "Umoja",
  "Luckysummer",
  "Westlands",
  "Juja",
  "Kangemi",
  "Langata",
  "Lavington",
  "Kileleshwa",
  "Rongai",
];

const titles = [townsTitle, estatesTitle, typesTitle, priceRangeTitle];

const Streets = () => {
  const [showMore, setShowMore] = useState(false);
  const listToShow = showMore
    ? [towns, estates, types, priceRange]
    : [
        towns.slice(0, 5),
        estates.slice(0, 5),
        types.slice(0, 5),
        priceRange.slice(0, 5),
      ];

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">GET HOUSES BY:</h1>

      <div className="flex flex-wrap gap-6 md:gap-8 w-full max-w-6xl mx-auto p-4">
        {listToShow.map((list, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-[22%]">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {titles[index]}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {list.map((item) => (
                <li key={item}>
                  <Link
                    to={`/filter/${item}`}
                    className="text-green-600 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          className={`bg-green-500 text-white p-2 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-transform transform ${
            showMore ? "hidden" : "block"
          }`}
          onClick={handleViewMore}
        >
          Show more...
        </button>
        <button
          type="button"
          className={`bg-green-500 text-white p-2 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-transform transform ${
            showMore ? "block" : "hidden"
          }`}
          onClick={handleViewMore}
        >
          Show less
        </button>
      </div>
    </div>
  );
};

export default Streets;
