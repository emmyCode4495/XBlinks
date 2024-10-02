import React from "react";

function FollowX() {
  return (
    <div className="mr-10 block w-full cursor-pointer font-medium text-blue-950 hover:animate-pulse">
      <a href="https://x.com/XBlinksOnSol" className="flex justify-end pr-4">
        <button
          type="button"
          className="flex rounded-md border border-blue-400 border-s-blue-300 px-5 py-3"
        >
          Follow Us For Updates
          <i className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#03415E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 21l7.548-7.548m0 0L3 3h5l5.452 7.548m-2.904 2.904L16 21h5l-7.548-10.452M21 3l-7.548 7.548"
              ></path>
            </svg>
          </i>
        </button>
      </a>
    </div>
  );
}

export default FollowX;
