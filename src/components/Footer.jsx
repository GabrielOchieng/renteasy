// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-green-400 py-4 text-center">
//       <Link to="/">RENTEASY.COM</Link>

//       <p className="text-white">Copyright &copy; THEGABRIELSHOW 2024.</p>
//       <nav className="flex justify-center mt-2 space-x-4">
//         <Link
//           to="https://www.linkedin.com/in/gabrielochieng"
//           target="_blank"
//           className="text-green-400 hover:text-cyan-500 "
//         >
//           <FaLinkedinIn />
//         </Link>
//         <Link
//           to="https://x.com/TechieGabriel?t=D8iyVIeZnEVOlPdImbJ2HQ&s=09"
//           target="_blank"
//           className="text-green-400 hover:text-cyan-500 "
//         >
//           <FaSquareXTwitter />
//         </Link>
//         <Link
//           to="https://github.com/GabrielOchieng"
//           target="_blank"
//           className="text-green-400 hover:text-cyan-500 "
//         >
//           <FaGithubSquare />
//         </Link>
//       </nav>
//       <p className="text-white">ALL RIGHTS RESERVED</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-green-400">
      {/* Upper section */}
      <div className="py-8">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between">
          {/* Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-2">
              RENTEASY is your go-to solution for seamless rental experiences.
              We offer the best deals and a user-friendly platform to find and
              manage your rental needs.
            </p>
          </div>

          {/* Navigation */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-green-400 hover:text-cyan-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-400 hover:text-cyan-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-green-400 hover:text-cyan-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/houses"
                  className="text-green-400 hover:text-cyan-500"
                >
                  Explore
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <p className="mt-2">
              <FaLocationDot className="inline mr-2" />
              123 Rental St.
              <br />
              City, State 12345
              <br />
              Email: contact@renteasy.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Get in Touch */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="flex mt-2 space-x-4">
              <Link
                to="https://www.linkedin.com/in/gabrielochieng"
                target="_blank"
                className="text-green-400 hover:text-cyan-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://x.com/TechieGabriel?t=D8iyVIeZnEVOlPdImbJ2HQ&s=09"
                target="_blank"
                className="text-green-400 hover:text-cyan-500"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                to="https://github.com/GabrielOchieng"
                target="_blank"
                className="text-green-400 hover:text-cyan-500"
              >
                <FaGithubSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="flex justify-center mb-4">
        <div className="w-11/12 border-t border-gray-700"></div>
      </div>

      {/* Lower section */}
      <div className="py-4 text-center">
        <p className="text-white">
          Copyright &copy; THEGABRIELSHOW 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
