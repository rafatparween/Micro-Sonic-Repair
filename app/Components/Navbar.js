"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[87%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
             123printsetupandhelp
            </Link>
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium hover:border border-[#1C8DCEED]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
            >
              About
            </Link>
            <Link
              href="/service"
              className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
            >
              Service
            </Link>
            <Link
              href="/product"
              className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
            >
              Contact
            </Link>
            <Link
              href="/membership"
              className="hover:border border-[#1C8DCEED] text-gray-900 hover:text-[#1C8DCEED] px-3 py-2 rounded-md text-xl font-medium"
            >
              Membership
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/service"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Service
          </Link>
          <Link
            href="/product"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            href="/membership"
            className="hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Membership
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
