import { Link } from "react-router-dom";
import home from "../assets/images/homebg.jpeg";

const items = [
  {
    image: { home },
    title: "Presidential",
    street: "3022 Kitengela",
    address: "3022",
    type: "4 Bedroom",
  },
  {
    image: { home },
    title: "Lake",
    street: "Garden City",
    address: "1234",
    type: "Apartment",
  },
  {
    image: { home },
    title: "The Residences",
    street: "Manyanja",
    address: "457",
    type: "Single Room",
  },
  {
    image: { home },
    title: "Sentral",
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
          <div
            key={index}
            className="w-[90%] sm:w-1/2 md:w-1/4 lg:w-[22%] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image.home}
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
          </div>
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
