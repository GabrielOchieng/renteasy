import { Link } from "react-router-dom";
import home from "../assets/images/home.webp";

const Ownership = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Learn More About Owning a Home
          </h1>
          <p className="text-lg text-gray-600">
            Renting is great, but maybe you're thinking about buying a home
            instead. We want you to find the right place. We have clients
            willing to sell homes, and we are the place designed to help you
            find your dream home, even if you are buying for the first time.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col justify-center p-8 sm:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Explore Your Options
            </h3>
            <p className="text-gray-700 mb-6">
              Deciding to become a homeowner is a big deal! Luckily, with us,
              you get the most accurate homes for sale property data, an agent
              directory, and collaboration tools to browse with your agent and
              co-shopper to help you make the right decision.
            </p>
            <Link
              to="/"
              className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Start Your Search
            </Link>
          </div>
          <div className="sm:w-1/2">
            <img
              src={home}
              alt="Home"
              className="w-full h-64 sm:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ownership;
