import { Link } from "react-router-dom";
import housekey from "../assets/images/housekey.webp";
import rentals from "../assets/images/rentals.jpeg";
import { Fade } from "react-awesome-reveal";

const Manage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            The Perfect Place to Manage Your Home
          </h1>
          <p className="text-lg text-gray-600">
            Work with the best set of property management tools on the market.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-10 sm:gap-0">
          {/* Advertise Your Rental */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-t-lg overflow-hidden">
            <div className="flex flex-col justify-center p-8 sm:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Advertise Your Rental
              </h3>
              <p className="text-gray-700 mb-6">
                Connect with more than a thousand renters looking for new homes
                using our comprehensive marketing platform.
              </p>
              <Link
                to="/create"
                className="inline-block bg-green-500 w-64 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                List Your Property
              </Link>
            </div>
            <div className="relative sm:w-1/2">
              <img
                src={rentals}
                alt="Rentals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lease 100% Online */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg  rounded-b-lg overflow-hidden">
            <div className="relative sm:w-1/2">
              <img
                src={housekey}
                alt="Lease Online"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Lease 100% Online
              </h3>
              <p className="text-gray-700 mb-6">
                Accept applications, agree on payments online, and process
                transactions seamlessly from anywhere.
              </p>
              <Link
                to="/chats"
                className="inline-block bg-green-500 w-64 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Manage Your Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manage;
