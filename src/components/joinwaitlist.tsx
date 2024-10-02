import React from "react";

const JoinWaitlist = () => {
  return (
    <div className="my-5 border">
      {/* <div className="m-3 border-4 border-double border-blue-400 px-6 py-3 text-blue-400 hover:bg-blue-400">
        <button type="button">Join The Waitlist</button>
        <button className="relative rounded-md border border-blue-700 bg-blue-500 px-4 py-2 text-white after:absolute after:bottom-[-4px] after:right-[-4px] after:h-[calc(100%-2px)] after:w-[calc(100%-2px)] after:rounded-br-md after:border-b-2 after:border-r-2 after:border-blue-700 after:content-['']">
          Click me
        </button>
      </div> */}

      <button
        type="button"
        className="relative border border-blue-400 px-8 py-1 font-semibold text-blue-400 shadow-md transition-colors duration-300 after:absolute after:bottom-[-4px] after:right-[-4px] after:h-[calc(100%-2px)] after:w-[calc(100%-2px)] after:rounded-br-lg after:border-b-2 after:border-r-2 after:border-blue-400 after:content-[''] hover:bg-blue-400 hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:after:translate-x-[-2px] active:after:translate-y-[-2px]"
      >
        Join The Waitlist
      </button>
    </div>
  );
};

export default JoinWaitlist;
