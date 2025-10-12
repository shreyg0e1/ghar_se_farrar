import React, { useState } from "react";
import { User, Menu, X } from "lucide-react"; // 👤 type icon
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 z-50 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center h-8">
          <img
            src="/gallery/gsflogo.png"
            alt="Gharsefarar Logo"
            className="max-h-full w-auto cursor-pointer object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-inter font-medium text-black">
          <Link
            to="/"
            className="hover:text-[#E65F25] cursor-pointer transition-colors duration-200"
          >
            Upcoming Trips
          </Link>
          <Link
            to="/about"
            className="hover:text-[#E65F25] cursor-pointer transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="hover:text-[#E65F25] cursor-pointer transition-colors duration-200"
          >
            Blogs
          </Link>
          <Link
            to="/gallery"
            className="hover:text-[#E65F25] cursor-pointer transition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            to="/payment"
            className="hover:text-[#E65F25] cursor-pointer transition-colors duration-200"
          >
            Payments
          </Link>

          {/* Login Icon */}
          <User className="w-6 h-6 text-[#E65F25] cursor-pointer hover:scale-110 transition-transform duration-200" />

          {/* CTA Button */}
          <button className="ml-4 bg-[#E65F25] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 cursor-pointer transition-all duration-300 active:scale-95">
            Plan an Escape
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-20 bg-white">
          <div className="flex flex-col items-center space-y-8 py-8 px-6">
            {/* Mobile Navigation Links */}
            <Link
              to="/trips"
              className="w-full text-center text-lg font-medium text-gray-800 hover:text-[#E65F25] py-3 border-b border-gray-100 cursor-pointer transition-all duration-200 active:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Upcoming Trips
            </Link>
            <Link
              to="/about"
              className="w-full text-center text-lg font-medium text-gray-800 hover:text-[#E65F25] py-3 border-b border-gray-100 cursor-pointer transition-all duration-200 active:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="w-full text-center text-lg font-medium text-gray-800 hover:text-[#E65F25] py-3 border-b border-gray-100 cursor-pointer transition-all duration-200 active:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/gallery"
              className="w-full text-center text-lg font-medium text-gray-800 hover:text-[#E65F25] py-3 border-b border-gray-100 cursor-pointer transition-all duration-200 active:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/payment"
              className="w-full text-center text-lg font-medium text-gray-800 hover:text-[#E65F25] py-3 border-b border-gray-100 cursor-pointer transition-all duration-200 active:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Payments
            </Link>

            {/* Mobile Login & CTA */}
            <div className="flex flex-col space-y-4 w-full max-w-xs mt-4">
              <div className="flex items-center justify-center space-x-2 py-3">
                <User className="w-6 h-6 text-[#E65F25]" />
                <span className="text-gray-800 font-medium">Login</span>
              </div>

              <button
                className="w-full bg-[#E65F25] text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 cursor-pointer transition-all duration-300 active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan an Escape
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
