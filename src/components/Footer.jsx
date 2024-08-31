import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-green-400 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white opacity-80">
            At Renteasy, we’re committed to making your rental experience smooth
            and efficient. Whether you're searching for your next home or
            managing property listings, our platform offers comprehensive
            services to meet your needs.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Home Listings */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Home Listings
              </h2>
              <p className="text-gray-700 mb-4">
                Discover a wide range of rental properties tailored to fit your
                unique preferences. From cozy apartments to spacious homes,
                Renteasy provides a variety of options to suit your needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>High-Quality Photos:</strong> Showcase your property
                  with professional images.
                </li>
                <li>
                  <strong>Detailed Descriptions:</strong> Craft compelling
                  descriptions emphasizing key features.
                </li>
                <li>
                  <strong>Virtual Tours:</strong> Offer virtual tours and
                  interactive floor plans.
                </li>
                <li>
                  <strong>Enhanced Visibility:</strong> Boost your property’s
                  visibility with targeted marketing.
                </li>
              </ul>
            </div>
          </div>

          {/* Consultation Service */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Consultation Service
              </h2>
              <p className="text-gray-700 mb-4">
                Receive expert advice to find the perfect rental property or
                manage your listings effectively. Our team is here to assist you
                in navigating the rental market.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>Personalized Consultations:</strong> Get tailored
                  advice from experienced professionals.
                </li>
                <li>
                  <strong>Market Insights:</strong> Benefit from in-depth market
                  analysis.
                </li>
                <li>
                  <strong>Property Evaluation:</strong> Get assistance in
                  evaluating properties.
                </li>
                <li>
                  <strong>Legal and Financial Advice:</strong> Access guidance
                  on legal and financial matters.
                </li>
              </ul>
            </div>
          </div>

          {/* Home Listing Management */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Home Listing Management
              </h2>
              <p className="text-gray-700 mb-4">
                Trust our team to handle all aspects of property management,
                ensuring a smooth and hassle-free experience. From routine
                maintenance to tenant communication, we’ve got you covered.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>User-Friendly Dashboard:</strong> Manage your listings
                  with ease.
                </li>
                <li>
                  <strong>Real-Time Updates:</strong> Keep your property
                  information accurate.
                </li>
                <li>
                  <strong>Performance Analytics:</strong> Track the performance
                  of your listings.
                </li>
                <li>
                  <strong>Flexible Listing Options:</strong> Customize your
                  listings with featured placements.
                </li>
              </ul>
            </div>
          </div>

          {/* Rental Opportunities */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Rental Opportunities
              </h2>
              <p className="text-gray-700 mb-4">
                Explore a diverse range of rental options that cater to various
                budgets and lifestyles. Find modern apartments, spacious houses,
                and more.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>Wide Range of Options:</strong> Discover rental
                  properties to fit different budgets.
                </li>
                <li>
                  <strong>Up-to-Date Listings:</strong> Stay informed with the
                  latest listings.
                </li>
                <li>
                  <strong>Neighborhood Insights:</strong> Get detailed
                  information about neighborhoods.
                </li>
                <li>
                  <strong>Easy Search Filters:</strong> Utilize advanced search
                  filters to narrow down your options.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
