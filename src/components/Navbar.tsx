import React from "react";
import XblinksDetailedLogo from "./XblinksDetailedLogo";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex h-24 w-full items-center justify-between border-b-2 border-black bg-white dark:border-white dark:bg-black">
      <div className="flex items-center">
        <XblinksDetailedLogo />
      </div>
      <div className="hidden space-x-6 md:flex">
        <a
          href="#"
          className="hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
        >
          Features
        </a>
        <a
          href="#"
          className="hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
        >
          How It Works
        </a>
        <a
          href="#"
          className="hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
        >
          Giveaways
        </a>
      </div>
      <div className="hidden md:block">
        <a
          href="#"
          target="_blank"
          className="m-12 rounded-none bg-[#08A0E9] px-4 py-2 text-black hover:bg-blue-600 dark:bg-[#08A0E9] dark:hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
      <div className="md:hidden">
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
