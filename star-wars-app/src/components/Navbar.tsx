"use client";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<Boolean>(false);

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            showDropdown ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8">
            <li>
              <NavbarLink text="HOME" href="/" />
            </li>
            <li>
              <NavbarLink text="CHARACTERS" href="/characters" />
            </li>
            <li>
              <NavbarLink text="MOVIES" href="/movies" />
            </li>
            <li>
              <NavbarLink text="SHIPS" href="/ships" />
            </li>
            <li>
              <NavbarLink text="PLANETS" href="/planets" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
