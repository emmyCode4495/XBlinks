import React from "react";
import XblinksDetailedLogo from "./XblinksDetailedLogo";

function ComingSoon() {
  return (
    <div className="flex items-center space-x-4">
      <XblinksDetailedLogo
        className="h-10 w-auto cursor-pointer text-blue-400 transition-colors duration-300 hover:text-blue-950"
        primaryColor="currentColor"
      />
      <div className="text-2xl font-bold text-blue-950">... Coming SoonX</div>
    </div>
  );
}

export default ComingSoon;
