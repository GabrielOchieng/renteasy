import { Link } from "react-router-dom";
import browsing from "../assets/images/browsing.webp";

const Listing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
            The Most Rental Provisions
          </h1>
          <p className="text-lg text-gray-600">
            Choose from over 1 million apartments, houses, estates, and
            townhomes for rent.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col justify-center p-8 sm:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Renting Made Simple
            </h3>
            <p className="text-gray-700 mb-6">
              Browse the highest quality provisions, apply online, connect with
              the owner, find your new home, and even pay your rent from any
              device.
            </p>
            <Link
              to="/about"
              className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 w-44 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Find Out More
            </Link>
          </div>
          <div className="relative sm:w-1/2 h-64 sm:h-auto">
            <img
              src={browsing}
              alt="Browsing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
