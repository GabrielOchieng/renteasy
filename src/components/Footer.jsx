import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-400 py-4 text-center">
      <Link to="/">RENTEASY.COM</Link>
      <p className="text-white">
        ALL RIGHTS RESERVED &copy; THEGABRIELSHOW 2024.
      </p>
    </footer>
  );
};

export default Footer;
