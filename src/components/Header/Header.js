'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/images/image 9.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the off-canvas menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} width={70} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-12 flex-grow justify-center mt-3">
          <Link href="/">
            <p className="navContent">Home</p>
          </Link>
          <Link href="/about">
            <p className="navContent">About</p>
          </Link>
          <Link href="/services">
            <p className="navContent">Services</p>
          </Link>
          <Link href="/blog">
            <p className="navContent">Blog</p>
          </Link>
          <Link href="/contact">
            <p className="navContent">Contact</p>
          </Link>
        </div>

        {/* Book Now Button */}
        <div className="mt-3 hidden md:block">
          <Link href="/book">
            <button className="navBtn text-white font-semibold py-2 px-4 rounded-2xl">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Off-canvas Menu for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} width={50} alt="Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        <nav className="flex flex-col p-4 space-y-6">
          <Link href="/" onClick={toggleMenu}>
            <p className="navContent">Home</p>
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            <p className="navContent">About</p>
          </Link>
          <Link href="/services" onClick={toggleMenu}>
            <p className="navContent">Services</p>
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            <p className="navContent">Blog</p>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <p className="navContent">Contact</p>
          </Link>
          <Link href="/book" onClick={toggleMenu}>
            <button className="navBtn text-white font-semibold py-2 px-4 rounded-2xl">
              Book Now
            </button>
          </Link>
        </nav>
      </div>

      {/* Overlay for the Off-canvas Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
