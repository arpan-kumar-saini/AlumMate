import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#e0e5ec] rounded-lg fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-3 md:py-4 px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-8 md:h-10 w-auto"
              alt="Colink Logo"
            />
            <span className="text-[#008AFC] font-bold text-lg md:text-xl lg:text-2xl">CO</span>
            <span className="text-[#1C4483] font-bold text-lg md:text-xl lg:text-2xl">Link</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-6 text-[#1C4483] font-semibold">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="#features" className="nav-item">Features</Link>
          <Link to="#blogs" className="nav-item">Blogs</Link>
          <Link to="#review" className="nav-item">Review</Link>
          <Link to="#team" className="nav-item">Our Team</Link>
          <Link to="/faq" className="nav-item">FAQs</Link>
          <Link to="#contact" className="nav-item">Contact Us</Link>
          <Link to="/arpan_admin" className="nav-item">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-[#1C4483] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#1C4483] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#1C4483]"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#E0E5EC] text-[#1C4483] py-6 px-4 rounded-b-lg shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-lg">Home</Link>
            <Link to="#features" className="text-lg">Features</Link>
            <Link to="#blogs" className="text-lg">Blogs</Link>
            <Link to="#review" className="text-lg">Review</Link>
            <Link to="#team" className="text-lg">Our Team</Link>
            <Link to="/faq" className="text-lg">FAQs</Link>
            <Link to="#contact" className="text-lg">Contact Us</Link>
            <Link to="/arpan_admin" className="text-lg">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
