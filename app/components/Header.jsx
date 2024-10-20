"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook for getting the current path
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import logo from "../public/images/logobg.png";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    // Ensure the theme is applied after the component mounts
    setIsMounted(true);
    console.log("pathname", pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (route) => pathname === route;

  return (
    <>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-slate-50 text-sm py-3 dark:bg-slate-950">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Link
              className=" flex  text-xl font-semibold"
              href="/"
              aria-label="Brand"
            >
              <div className="inline-flex justify-center items-center ">
                <Image
                  // src="/public/images/logo.jpg" //  throwing error not getting imag eso alt showing
                  src={logo}
                  width={70}
                  height={60}
                  // className="w-20 h-auto"
                  alt="Picture of the author"
                />
                <h1 className="text-3xl  font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 text-transparent bg-clip-text">
                  Mayuresh
                </h1>
              </div>
            </Link>

            <button
              type="button"
              className="sm:hidden p-2 text-orange-800 dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>

          <div
            id="navbar"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row sm:items-center sm:justify-end w-full mt-4 sm:mt-0`}
          >
            <Link
              href="/"
              className={`font-semibold dark:text-white hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:text-orange-500 dark:focus:text-orange-400 mx-8 ${
                isActive("/") ? "dark:text-orange-500 text-orange-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-semibold dark:text-white hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:text-orange-500 dark:focus:text-orange-400 mx-8 ${
                isActive("/about") ? "dark:text-orange-500 text-orange-500" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/blogs"
              className={`font-semibold dark:text-white hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:text-orange-500 dark:focus:text-orange-400 mx-8 ${
                isActive("/blogs") ? "dark:text-orange-500 text-orange-500" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`font-semibold dark:text-white hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:text-orange-500 dark:focus:text-orange-400 mx-8 ${
                isActive("/contact")
                  ? "dark:text-orange-500 text-orange-500"
                  : ""
              }`}
            >
              Contact
            </Link>

            {/* Show ThemeSwitch after hydration to avoid SSR mismatch */}
            {isMounted && (
              <div className="mt-3 sm:mt-0 sm:ml-5">
                <ThemeSwitch />
              </div>
            )}
          </div>
      
        </nav>
        <hr className="bg-orange-500"/>
      </header>
    </>
  );
};

export default Header;
