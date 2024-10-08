import React from "react";

function FollowX() {
  return (
    <a
      target="blank"
      href="https://x.com/XBlinksOnSol"
      className="fixed right-4 top-4 font-medium text-blue-950 hover:animate-pulse"
    >
      <div className="flex items-center rounded-md border border-blue-400 border-s-blue-300 bg-white px-5 py-3 shadow-md">
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
      </div>
    </a>
  );
}

export default FollowX;
