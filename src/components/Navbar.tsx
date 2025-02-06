import React, { useState } from "react";
import { CiShoppingCart, CiHeart, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-myyellow w-full">
      <nav className="flex items-center justify-between text-gray-800 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 h-16 md:h-20 lg:h-24 w-full dark:text-gray-100">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href={"/"}>
            <ModeToggle />
          </Link>
        </div>

        {/* Links Section */}
        <ul
          className={`flex flex-col sm:flex-row justify-center sm:space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-base lg:text-lg ${
            isMobileMenuOpen ? "flex" : "hidden"
          } sm:flex`}
        >
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="sm:hidden flex items-center">
          <button className="text-3xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex gap-5 md:gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl">
          <Link href="/signup">
            <button className="hover:text-gray-400">
              <UserButton />
            </button>
          </Link>
          <Link href="/searchbar">
            <button className="hover:text-gray-400">
              <CiSearch title="Search" />
            </button>
          </Link>
          <Link href="/wish">
            <button className="hover:text-gray-400">
              <CiHeart title="Wishes" />
            </button>
          </Link>
          <Link href="/cart">
            <button className="hover:text-gray-400">
              <CiShoppingCart title="Cart" />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
