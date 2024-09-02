import { Link } from "react-router-dom";
import home from "../assets/images/homebg.jpeg";
import housekey from "../assets/images/housekey.webp";
import rentals from "../assets/images/rentals.jpeg";
import own from "../assets/images/home.webp";

const items = [
  {
    image: home,
    title: "Home",
    street: "3022 Kitengela",
    address: "3022",
    type: "4 Bedroom",
  },
  {
    image: own,
    title: "Own Compound",
    street: "Garden City",
    address: "1234",
    type: "Apartment",
  },
  {
    image: housekey,
    title: "Single Room",
    street: "Manyanja",
    address: "457",
    type: "Single Room",
  },
  {
    image: rentals,
    title: "Bed Sitter",
    street: "1233 Kahawa",
    address: "86",
    type: "Bedsitter",
  },
];
const Explore = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl md:text-4xl">
          Explore Rentals in Nairobi
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {items.map((item, index) => (
          <Link
            to="/houses"
            key={index}
            className="w-[90%] sm:w-1/2 md:w-1/4 lg:w-[22%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2 text-center">
                {item.title}
              </h2>
              <p className="text-center text-gray-600">{item.street}</p>
              <p className="text-center text-gray-600">{item.address}</p>
              <p className="text-center text-gray-600">{item.type}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/houses"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default Explore;
