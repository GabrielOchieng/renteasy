import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I search for rental properties on Renteasy?",
    answer:
      "To search for rental properties, you can use the search input field at the top of the page and search based on your desired town or use our advanced search filters to specify your preferences, including location, price range, and property type. Our intuitive interface allows you to easily browse and find homes that match your needs.",
    id: "1",
  },
  //   {
  //     question: "Can I save my favorite properties on Renteasy?",
  //     answer:
  //       "Yes, Renteasy allows you to save your favorite properties for easy access later. Simply click the heart icon on any property listing to add it to your saved list.",
  //     id: "2",
  //   },
  {
    question: "How do I contact landlords or property managers on Renteasy?",
    answer:
      "You can contact landlords or property managers directly through the messaging feature on Renteasy. Once you are logged in, navigate to the property listing and use the 'Chat' button to send a message.",
    id: "3",
  },
  {
    question: "What types of properties are listed on Renteasy?",
    answer:
      "Renteasy lists a variety of properties including apartments, houses, and commercial spaces. Use our filters to narrow down your search based on the type of property you are looking for.",
    id: "4",
  },
  {
    question: "Are there any fees for using Renteasy?",
    answer:
      "Using Renteasy is currently free for all tenants searching for rental properties and property managers or landlords listing their properties.",
    id: "5",
  },
  {
    question: "How can I report an issue with a property listing?",
    answer:
      "If you encounter any issues with a property listing, please use the 'Contact info' details found at the bottom of the page. Our support team will review the report and take necessary actions.",
    id: "6",
  },
];

const Faq = () => {
  const [shownIndex, setShownIndex] = useState(null);

  const handleToggle = (index) => {
    setShownIndex(index === shownIndex ? null : index);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:ogingagabriel@gmail.com";
  };

  return (
    <div className="container  mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold my-4">Frequently Asked Questions</h2>
        <p className="text-lg mb-6">
          Everything you need to know about the Renteasy platform and its
          features. Can’t find the answer you’re looking for? Please{" "}
          <span className="text-green-500 hover:underline">
            <Link onClick={handleContactClick} href="/">
              Contact us.
            </Link>
          </span>
        </p>
      </section>
      <section className="border rounded p-5 shadow-md">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white shadow-sm  rounded-md overflow-hidden"
            >
              <div
                onClick={() => handleToggle(index)}
                className={`cursor-pointer p-4 flex items-center justify-between transition-colors ${
                  shownIndex === index ? "bg-green-100" : "bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {shownIndex === index ? (
                  <CiCircleMinus className="text-red-500 text-2xl" />
                ) : (
                  <CiCirclePlus className="text-green-500 text-2xl" />
                )}
              </div>
              {shownIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
