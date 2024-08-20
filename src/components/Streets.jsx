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
    <div className="flex flex-col items-center py-10">
      <div>
        <h1 className="font-bold text-4xl underline">GET HOUSES BY:</h1>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-0 w-[100%] mx-auto justify-center   p-10">
        {listToShow.map((list, index) => (
          <div key={index} className="text-xs w-[45%] md:w-[23%]">
            {<h2 className="font-bold mb-2">{titles[index]}</h2>}
            <ul className="flex flex-col justify-center">
              {list.map((item) => (
                <li key={item}>
                  {" "}
                  {/* Use item itself as key */}
                  <Link to={`/filter/${item}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <button
          type="submit"
          className={` p-3 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
            showMore ? "hidden" : ""
          }`}
          onClick={handleViewMore}
        >
          Show more...
        </button>
        <button
          type="submit"
          className={` p-3 w-32 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
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
