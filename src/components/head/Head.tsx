import React, { useState } from "react";
import { ModeToggle } from "../mood/MoodTogol";
import { Search, Menu, X } from "lucide-react";
import UserDrop from "../user/UserDrop";
import { Link, NavLink } from "react-router-dom";


const Head = () => {
  const [hovered, setHovered] = useState({
    home: false,
    features: false,
    pricing: false,
    blog: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  const navItems = [
    { label: "Home", key:"/" },
    { label: "Activities", key:"/about" },
    { label: "Events", key:"/upevent" },
    { label: "Contact", key:"/contact"  },
  ];

  return (
    <header className="relative w-full px-6 text-gray-700 bg-white dark:bg-[#0A0A0A] body-font rounded-full">
      <div className="flex flex-wrap items-center justify-between py-1 mx-auto max-w-7xl">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-black dark:text-white"
        >
          vTickets
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base">
          {navItems.map(({ label, key }) => (
            <Link
            key={key}
            to={key}
            className="relative font-medium text-gray-600 transition hover:text-gray-900 dark:text-white"
            onMouseEnter={() => setHovered((prev) => ({ ...prev, [key]: true }))}
            onMouseLeave={() => setHovered((prev) => ({ ...prev, [key]: false }))}
          >
            <span className="block">{label}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 -mb-1 overflow-hidden">
              <span
                className={`block origin-left transform bg-gray-900 dark:bg-white h-full transition-transform duration-300 ${
                  hovered[key] ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          </Link>
            
          ))}
        </nav>

        {/* Right Tools */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 inset-y-0 my-auto w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md"
            />
          </div>
          <ModeToggle />
          <UserDrop />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 z-40 w-3/4 h-full p-6 bg-white dark:bg-gray-900 shadow-lg transition duration-300">
          <div className="flex flex-col space-y-6">
            {navItems.map(({ label, key }) => (
              <Link
                key={key}
                to={key}
                className="text-lg font-medium text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <hr className="border-gray-300 dark:border-gray-700" />
            {/* Mobile tools (optional) */}
            <div className="flex items-center space-x-3">
              <ModeToggle />
              <UserDrop />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;
