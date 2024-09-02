import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import agent from "../assets/images/agent.jpg";
import CountUp from "react-countup"; // Import the CountUp component
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Container for content */}
      <div className="py-12">
        {/* Our Journey Section */}
        <section className="container mx-auto mb-12 py-12 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-green-400">
                Our Journey
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Renteasy started with a vision to revolutionize the rental
                experience. What began as a small initiative to simplify rental
                management has grown into a comprehensive platform that connects
                tenants with their ideal properties seamlessly. Over time, we’ve
                integrated advanced features, built a user-friendly interface,
                and expanded our services to offer an unmatched rental
                experience.
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <div className="border border-green-400 rounded-lg p-3 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold text-green-600">
                    <CountUp end={1000} duration={10} separator="," />+
                  </h3>
                  <p className="text-gray-600">Listings Available</p>
                </div>

                <div className="border border-green-400 rounded-lg p-3 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold text-green-600">
                    <CountUp end={2000} duration={10} separator="," />+
                  </h3>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="border border-green-400 rounded-lg p-3 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold text-green-600">
                    <CountUp end={3} duration={10} />+
                  </h3>
                  <p className="text-gray-600">Years in Service</p>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
              <img
                src={agent}
                alt="Renteasy Interface"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <Fade duration={1000} delay={500}>
          <section className="mb-12 bg-green-100 py-12 px-6">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-green-900">
                Our Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    User-Centric
                  </h3>
                  <p className="text-gray-700">
                    At Renteasy, the user experience is our top priority. We
                    design our platform to be intuitive and accessible, ensuring
                    that finding and managing rental properties is as easy as
                    possible.
                  </p>
                </div>

                <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    Innovation
                  </h3>
                  <p className="text-gray-700">
                    We are committed to integrating the latest technology to
                    improve our services. Our platform features cutting-edge
                    tools to enhance your rental experience and streamline the
                    property search process.
                  </p>
                </div>
                <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    Transparency
                  </h3>
                  <p className="text-gray-700">
                    Transparency is at the core of our operations. We provide
                    clear and accurate information to help users make informed
                    decisions about their rental options.
                  </p>
                </div>
                <div className="p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    Our Commitment
                  </h3>
                  <p className="text-gray-700">
                    Renteasy is dedicated to providing a seamless and supportive
                    rental experience. We strive to continually enhance our
                    platform, offer exceptional customer service, and ensure
                    that every interaction with our website meets the highest
                    standards of quality and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Fade>

        {/* Our Achievements Section */}
        <Fade duration={1000} delay={500}>
          <section className="mb-12 bg-gray-100 py-12 px-6">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <FaStar className="text-green-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Top User Ratings
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Renteasy has consistently received high ratings from users
                    for its ease of use, reliability, and customer support,
                    reflecting our commitment to excellence.
                  </p>
                </div>
                <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <FaStar className="text-green-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Innovation Awards
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Our innovative approach and dedication to improving the
                    rental experience have earned us several awards in the tech
                    and real estate sectors.
                  </p>
                </div>
                <div className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <FaStar className="text-green-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Community Impact
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Our platform has made a significant impact on communities by
                    helping users find their ideal homes and enhancing the
                    rental process with advanced features.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Fade>

        {/* Call to Action */}
        <Fade duration={1000} delay={500}>
          <section className="bg-green-50 py-12 px-6 mb-12">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Find Your Perfect Rental
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Explore Renteasy to find your ideal rental property today.
                Whether you're searching for a new apartment, house, or
                commercial space, our platform offers a wide range of options to
                meet your needs.
              </p>
              <Link
                to="/houses"
                className="inline-block bg-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
              >
                Start Searching
              </Link>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
