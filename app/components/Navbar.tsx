"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 sm:px-[24px] md:px-[56px] min-w-[320px]">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" passHref className="text-black text-lg font-semibold">
            <Image
              src="/logo.png"
              alt="Logo"
              width={95}
              height={20}
              loading="lazy"
            />
          </Link>
        </div>
        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            title="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/crypto-taxes">Crypto Taxes</NavLink>
          <NavLink href="/free-tools">Free Tools</NavLink>
          <NavLink href="/resource-center">Resource Center</NavLink>
          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded w-[136px] h-[40px]">
            Get Started
          </button>
        </div>
      </div>
      {/* Burger Menu Content */}
      {isOpen && (
        <div className="md:hidden mt-4 absolute top-14 right-4 bg-white p-4 shadow-lg rounded">
          <div className="flex flex-col gap-3 text-right">
            <NavLink href="/crypto-taxes">Crypto Taxes</NavLink>
            <NavLink href="/free-tools">Free Tools</NavLink>
            <NavLink href="/resource-center">Resource Center</NavLink>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded w-[136px] h-[40px]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLink component to handle Next.js Link
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      passHref
      className="text-gray-600 duration-300 hover:delay-300 hover:text-black font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;
