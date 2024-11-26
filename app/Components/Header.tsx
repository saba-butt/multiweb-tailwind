"use client";
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-800 text-yellow-500 py-5 flex justify-between items-center px-10 relative z-10">
    {/* Logo and Title */}
    <div className="flex items-center gap-3">
      <Image src="/logo.jpg" alt="logo" width={45} height={45} />
      <h1 className="text-2xl font-bold">
      <span className="text-yellow-500">Emirates</span>
      <span className="text-blue-600">Books</span>
      <span className="text-red-700">Publishers</span>

      </h1>
    </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/About" onClick={closeMenu}>
          About
        </Link>
        <Link href="/Products" onClick={closeMenu}>
          Products
        </Link>
        <Link href="/Contact" onClick={closeMenu}>
          Contact
        </Link>
      
      </nav>

      {/* Mobile Navbar Icon */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="Open menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-blue-500 p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Close menu"
          />
        </div>

        <nav className="flex flex-col items-end pt-10 gap-5 text-blue-600 font-bold">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/About" onClick={closeMenu}>
            About
          </Link>
          <Link href="/Products" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/Contact" onClick={closeMenu}>
            Contact
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
