import React from "react";

const BlueBg = () => {
  return (
    <svg
      className="absolute -bottom-0 -right-0"
      xmlns="http://www.w3.org/2000/svg"
      width="649"
      height="678"
      fill="none"
      viewBox="0 0 649 678"
    >
      <g filter="url(#filter0_f_128_11)">
        <rect
          width="331"
          height="318"
          x="400"
          y="400"
          fill="#08A0E9"
          rx="100"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_128_11"
          width="1131"
          height="1118"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_128_11"
            stdDeviation="200"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlueBg;
