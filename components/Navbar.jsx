import Logo from "../assets/images/pain_kulture_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { session } = UserAuth();

  return (
    <nav className="relative flex items-center justify-between w-full px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-14 h-auto" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/Home" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/Shop" className="hover:text-blue-600 transition">
          Shop
        </Link>
        <Link to="/About" className="hover:text-blue-600 transition">
          About
        </Link>
        {!session ? (
          <Link
            to="/Login"
            className="border-2 rounded-full bg-white text-black px-4 py-2 hover:bg-gray-200 transition"
          >
            Login
          </Link>
        ) : (
          <span className="text-white">{session.user?.email}</span>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 flex flex-col gap-3 bg-gray-800 w-76 rounded-lg shadow-md p-4">
          <button className="hover:text-blue-600 transition text-center">
            Home
          </button>
          <button className="hover:text-blue-600 transition text-center">
            Shop
          </button>
          <button className="hover:text-blue-600 transition text-center">
            About
          </button>
          <div className="text-center">
            {!session ? (
              <button className="border-2 rounded-full bg-white text-black px-4 py-2 hover:bg-gray-200">
                Login
              </button>
            ) : (
              <button className="border-2 rounded-full bg-white text-black px-4 py-2 hover:bg-gray-200">
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
