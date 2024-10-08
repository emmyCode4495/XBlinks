"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./app.css";
// import Header from "@/components/Header";
import Header from "@/components/ComingSoonHeader";
import AnimatedBackground from "@/components/animatebackground";
import Navbar from "@/components/Navbar";
// import Partner from "@/components/partner";

const PlusJakarta = localFont({
  src: "../../public/fonts/PlusJakartaSans-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--plus-jakarta-sans",
});

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({ darkMode, toggleDarkMode }: DarkModeToggleProps) => (
  <button
    onClick={toggleDarkMode}
    className="fixed bottom-5 right-5 z-50 rounded-full bg-white p-2 transition-colors duration-300 dark:bg-gray-800"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="31"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          d="M32 38C33.6667 38 35.0833 37.4167 36.25 36.25C37.4167 35.0833 38 33.6667 38 32C38 30.3333 37.4167 28.9167 36.25 27.75C35.0833 26.5833 33.6667 26 32 26C30.3333 26 28.9167 26.5833 27.75 27.75C26.5833 28.9167 26 30.3333 26 32C26 33.6667 26.5833 35.0833 27.75 36.25C28.9167 37.4167 30.3333 38 32 38ZM32 42C29.2333 42 26.875 41.025 24.925 39.075C22.975 37.125 22 34.7667 22 32C22 29.2333 22.975 26.875 24.925 24.925C26.875 22.975 29.2333 22 32 22C34.7667 22 37.125 22.975 39.075 24.925C41.025 26.875 42 29.2333 42 32C42 34.7667 41.025 37.125 39.075 39.075C37.125 41.025 34.7667 42 32 42ZM18 34H10V30H18V34ZM54 34H46V30H54V34ZM30 18V10H34V18H30ZM30 54V46H34V54H30ZM20.8 23.5L15.75 18.65L18.6 15.7L23.4 20.7L20.8 23.5ZM45.4 48.3L40.55 43.25L43.2 40.5L48.25 45.35L45.4 48.3ZM40.5 20.8L45.35 15.75L48.3 18.6L43.3 23.4L40.5 20.8ZM15.7 45.4L20.75 40.55L23.5 43.2L18.65 48.25L15.7 45.4Z"
          fill="currentColor"
        />
      </svg>
    ) : (
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="31"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          d="M32 50C27 50 22.75 48.25 19.25 44.75C15.75 41.25 14 37 14 32C14 27 15.75 22.75 19.25 19.25C22.75 15.75 27 14 32 14C32.4667 14 32.925 14.0167 33.375 14.05C33.825 14.0833 34.2667 14.1333 34.7 14.2C33.3333 15.1667 32.2417 16.425 31.425 17.975C30.6083 19.525 30.2 21.2 30.2 23C30.2 26 31.25 28.55 33.35 30.65C35.45 32.75 38 33.8 41 33.8C42.8333 33.8 44.5167 33.3917 46.05 32.575C47.5833 31.7583 48.8333 30.6667 49.8 29.3C49.8667 29.7333 49.9167 30.175 49.95 30.625C49.9833 31.075 50 31.5333 50 32C50 37 48.25 41.25 44.75 44.75C41.25 48.25 37 50 32 50ZM32 46C34.9333 46 37.5667 45.1917 39.9 43.575C42.2333 41.9583 43.9333 39.85 45 37.25C44.3333 37.4167 43.6667 37.55 43 37.65C42.3333 37.75 41.6667 37.8 41 37.8C36.9 37.8 33.4083 36.3583 30.525 33.475C27.6417 30.5917 26.2 27.1 26.2 23C26.2 22.3333 26.25 21.6667 26.35 21C26.45 20.3333 26.5833 19.6667 26.75 19C24.15 20.0667 22.0417 21.7667 20.425 24.1C18.8083 26.4333 18 29.0667 18 32C18 35.8667 19.3667 39.1667 22.1 41.9C24.8333 44.6333 28.1333 46 32 46Z"
          fill="currentColor"
        />
      </svg>
    )}
  </button>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html
      lang="en"
      className={`${PlusJakarta.variable} ${darkMode ? "dark" : ""}`}
    >
      <body className="max-w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-gray-900">
        <AnimatedBackground />
        <Header />
        {/* <Navbar />
        <Header />

        <Partner /> */}

        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="text-gray-900 transition-colors duration-300 dark:text-white">
          {children}
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
