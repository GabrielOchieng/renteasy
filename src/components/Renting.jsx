// import phoneb from "../assets/images/phoneb.webp";
// import browsing from "../assets/images/browsing.webp";
// import family from "../assets/images/family.jpeg";
// import googleplay from "../assets/images/googleplay.jpg";
// import appstore from "../assets/images/appstore.png";
// import { Link } from "react-router-dom";

// const Renting = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
//             The Perfect Place for Renting Your Home
//           </h1>
//           <p className="text-lg text-gray-600">
//             Work with the best set of property management tools on the market.
//           </p>
//         </div>

//         {/* Content Sections */}
//         <div className="flex flex-col gap-10 sm:gap-0">
//           {/* Tips for Renters */}
//           <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-t-lg overflow-hidden">
//             <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Tips for Renters
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 Find answers to all of your renting questions with the best
//                 guide around.
//               </p>
//               <Link
//                 to="/"
//                 className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 Browse Articles
//               </Link>
//             </div>
//             <div className="w-full sm:w-1/2">
//               <img
//                 src={family}
//                 alt="Family"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Property Manager Resources */}
//           <div className="flex flex-col sm:flex-row bg-white shadow-lg overflow-hidden">
//             <div className="w-full sm:w-1/2">
//               <img
//                 src={browsing}
//                 alt="Browsing"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Property Manager Resources
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 Stay up-to-date with tips and guides on rent payments, leasing,
//                 management solutions, and more.
//               </p>
//               <Link
//                 to="/"
//                 className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 Stay Informed
//               </Link>
//             </div>
//           </div>

//           {/* Take Us With You */}
//           <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-b-lg overflow-hidden">
//             <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Take Us With You
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 Keep{" "}
//                 <Link to="/" className="text-green-500 hover:underline">
//                   Rento.com
//                 </Link>{" "}
//                 in the palm of your hand throughout your rental journey.
//               </p>
//               <div className="flex gap-4">
//                 <img
//                   src={appstore}
//                   alt="App Store"
//                   className="w-32 cursor-pointer"
//                 />
//                 <img
//                   src={googleplay}
//                   alt="Google Play"
//                   className="w-32 cursor-pointer"
//                 />
//               </div>
//             </div>
//             <div className="w-full sm:w-1/2">
//               <img
//                 src={phoneb}
//                 alt="Phone"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Renting;

import { Link } from "react-router-dom";
import phoneb from "../assets/images/phoneb.webp";
import browsing from "../assets/images/browsing.webp";
import family from "../assets/images/family.jpeg";
import googleplay from "../assets/images/googleplay.jpg";
import appstore from "../assets/images/appstore.png";

const Renting = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            The Perfect Place for Renting Your Home
          </h1>
          <p className="text-lg text-gray-600">
            Work with the best set of property management tools on the market.
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 sm:gap-0">
          {/* Tips for Renters */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-t-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Tips for Renters
              </h3>
              <p className="text-gray-700 mb-6">
                Find answers to all of your renting questions with the best
                guide around.
              </p>
              <Link
                to="/"
                className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Browse Articles
              </Link>
            </div>
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src={family}
                alt="Family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Property Manager Resources */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg  overflow-hidden">
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src={browsing}
                alt="Browsing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Property Manager Resources
              </h3>
              <p className="text-gray-700 mb-6">
                Stay up-to-date with tips and guides on rent payments, leasing,
                management solutions, and more.
              </p>
              <Link
                to="/"
                className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Stay Informed
              </Link>
            </div>
          </div>

          {/* Take Us With You */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-b-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-8 sm:p-12 gap-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Take Us With You
              </h3>
              <p className="text-gray-700 mb-6">
                Keep{" "}
                <Link to="/" className="text-green-500 hover:underline">
                  Rento.com
                </Link>{" "}
                in the palm of your hand throughout your rental journey.
              </p>
              <div className="flex gap-4">
                <img
                  src={appstore}
                  alt="App Store"
                  className="w-32 h-auto cursor-pointer"
                />
                <img
                  src={googleplay}
                  alt="Google Play"
                  className="w-32 h-auto cursor-pointer"
                />
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src={phoneb}
                alt="Phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Renting;
