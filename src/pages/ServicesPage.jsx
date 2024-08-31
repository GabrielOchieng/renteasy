import React from "react";

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          At Renteasy, we're committed to making your rental experience smooth
          and efficient. Whether you're searching for your next home or managing
          property listings, our platform offers comprehensive services to meet
          your needs.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Home Listings */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-green-400 underline text-2xl font-semibold mb-4">
              Home Listings
            </h2>
            <p className="text-gray-700 mb-4">
              Discover a wide range of rental properties tailored to fit your
              unique preferences. From cozy apartments to spacious homes,
              Renteasy provides a variety of options to suit your needs.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>High-Quality Photos:</strong> Showcase your property
                with professional, high-resolution images that highlight its
                best features.
              </li>
              <li>
                <strong>Detailed Descriptions:</strong> Craft compelling
                descriptions that emphasize key selling points and amenities.
              </li>
              <li>
                <strong>Virtual Tours:</strong> Offer virtual tours and
                interactive floor plans for a comprehensive view of the
                property.
              </li>
              <li>
                <strong>Enhanced Visibility:</strong> Boost your property’s
                visibility with promoted listings and targeted marketing
                campaigns.
              </li>
            </ul>
          </div>
        </div>

        {/* Consultation Service */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl text-green-400 underline font-semibold mb-4">
              Consultation Service
            </h2>
            <p className="text-gray-700 mb-4">
              Receive expert advice to find the perfect rental property or
              manage your listings effectively. Our dedicated team of real
              estate professionals is here to assist you in navigating the
              rental market.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personalized Consultations:</strong> Get tailored advice
                from experienced professionals.
              </li>
              <li>
                <strong>Market Insights:</strong> Benefit from in-depth market
                analysis and trends.
              </li>
              <li>
                <strong>Property Evaluation:</strong> Get assistance in
                evaluating properties to ensure they meet your criteria.
              </li>
              <li>
                <strong>Legal and Financial Advice:</strong> Access guidance on
                legal and financial matters related to renting or listing
                properties.
              </li>
            </ul>
          </div>
        </div>

        {/* Home Listing Management */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl text-green-400 underline font-semibold mb-4">
              Home Listing Management
            </h2>
            <p className="text-gray-700 mb-4">
              Trust our team to handle all aspects of property management,
              ensuring a smooth and hassle-free experience. From routine
              maintenance to tenant communication, we’ve got you covered.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>User-Friendly Dashboard:</strong> Manage your listings
                effortlessly with our intuitive dashboard.
              </li>
              <li>
                <strong>Real-Time Updates:</strong> Keep your property
                information accurate with real-time updates and notifications.
              </li>
              <li>
                <strong>Performance Analytics:</strong> Track the performance of
                your listings with detailed analytics.
              </li>
              <li>
                <strong>Flexible Listing Options:</strong> Customize your
                listings with options such as featured placements and premium
                upgrades.
              </li>
            </ul>
          </div>
        </div>

        {/* Rental Opportunities */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl text-green-400 underline font-semibold mb-4">
              Rental Opportunities
            </h2>
            <p className="text-gray-700 mb-4">
              Explore a diverse range of rental options that cater to various
              budgets, preferences, and lifestyles. Find modern apartments,
              spacious houses, and more.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Wide Range of Options:</strong> Discover a selection of
                rental properties to fit different budgets and preferences.
              </li>
              <li>
                <strong>Up-to-Date Listings:</strong> Stay informed with the
                latest rental listings, regularly updated for current
                availability and pricing.
              </li>
              <li>
                <strong>Neighborhood Insights:</strong> Get detailed information
                about different neighborhoods, including amenities and schools.
              </li>
              <li>
                <strong>Easy Search Filters:</strong> Utilize advanced search
                filters to narrow down your options based on various criteria.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
