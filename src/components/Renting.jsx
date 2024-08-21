import phoneb from "../assets/images/phoneb.webp";
import browsing from "../assets/images/browsing.webp";
import family from "../assets/images/family.jpeg";
import googleplay from "../assets/images/googleplay.jpg";
import appstore from "../assets/images/appstore.png";
import { Link } from "react-router-dom";

const Renting = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto py-10 gap-5">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">
          The Perfect Place to Renting Your Home
        </h1>
        <p>
          Work with the best set of property management tools on the market.
        </p>
      </div>

      <div className="flex flex-col bg-gray-100 pb-5 sm:pb-0 ">
        <div className="flex flex-col sm:flex-row mt-10 sm:mt-0">
          <div className="flex flex-col items-start justify-center w-[90%] sm:w-1/2 mx-auto  p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Tips for Renters</h3>
            <p>
              Find answers to all of your renting questions with the best guide
              around.
            </p>
            <Link to="/" className="text-blue-400 hover:underline text-xl">
              Browse Articles
            </Link>
          </div>
          <div className="w-[90%] sm:w-1/2 mx-auto ">
            <img src={family} alt="Home" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 sm:mt-0">
          <div className="w-[90%] sm:w-1/2 mx-auto ">
            <img
              src={browsing}
              alt="Home"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[90%] sm:w-1/2 mx-auto p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Property Manager Resources</h3>
            <p>
              Stay up-to-date using our tips and guides on rent payments,
              leasing, management solutions, and more.
            </p>
            <Link to="/" className="text-blue-400 hover:underline text-xl">
              Stay Informed
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col items-start justify-center w-[90%] sm:w-1/2 mx-auto p-4 sm:p-10 gap-5 ">
            <h3 className="font-bold text-2xl">Take Us With You</h3>
            <p>
              Keep{" "}
              <span>
                <Link to="/" className="text-blue-400 hover:underline">
                  Rento.com
                </Link>
              </span>{" "}
              in the palm of your hand throughout your rental journey.
            </p>
            <div className=" flex gap-3">
              <img src={appstore} className="cursor-pointer" alt="appstore" />
              <img
                src={googleplay}
                className="cursor-pointer"
                alt="googleplay"
              />
            </div>
          </div>
          <div className="w-[90%] sm:w-1/2 mx-auto ">
            <img src={phoneb} alt="Home" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renting;
