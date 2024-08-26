import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-green-400 py-4 text-center">
      <Link to="/">RENTEASY.COM</Link>

      <p className="text-white">Copyright &copy; THEGABRIELSHOW 2024.</p>
      <nav className="flex justify-center mt-2 space-x-4">
        <Link
          to="https://www.linkedin.com/in/gabrielochieng"
          target="_blank"
          className="text-green-400 hover:text-cyan-500 "
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://x.com/TechieGabriel?t=D8iyVIeZnEVOlPdImbJ2HQ&s=09"
          target="_blank"
          className="text-green-400 hover:text-cyan-500 "
        >
          <FaSquareXTwitter />
        </Link>
        <Link
          to="https://github.com/GabrielOchieng"
          target="_blank"
          className="text-green-400 hover:text-cyan-500 "
        >
          <FaGithubSquare />
        </Link>
      </nav>
      <p className="text-white">ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
