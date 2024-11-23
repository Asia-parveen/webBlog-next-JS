"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#1D3557] p-4">
      <div className="max-w-7xl mx-[3rem] flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.jpg" 
            alt="Book Icon"
            width={40} 
            height={40} 
            className="rounded-lg transition-opacity duration-300 hover:opacity-60"
          />
          <span className="text-white text-2xl font-semibold hover:text-[#F1C40F]">BookBlogs</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 font-bold">
            Home
          </Link>
          <Link href="/books" className="text-white hover:text-gray-300 font-bold">
            Books
          </Link>
          <Link href="/pen" className="text-white hover:text-gray-300 font-bold">
            Items
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 font-bold">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-[#1D3557] p-4 text-center hover:text-[#F1C40F]`}
      >
        <Link
          href="/"
          className="block text-white hover:text-gray-300 font-bold py-2"
          onClick={() => setMenuOpen(false)} // Close the menu after clicking
        >
          Home
        </Link>
        <Link
          href="/books"
          className="block text-white hover:text-gray-300 font-bold py-2"
          onClick={() => setMenuOpen(false)} // Close the menu after clicking
        >
         Books
        </Link>
        <Link
          href="/pen"
          className="block text-white hover:text-gray-300 font-bold py-2"
          onClick={() => setMenuOpen(false)} // Close the menu after clicking
        >
         Items
        </Link>
        <Link
          href="/contact"
          className="block text-white hover:text-gray-300 font-bold py-2"
          onClick={() => setMenuOpen(false)} // Close the menu after clicking
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;


