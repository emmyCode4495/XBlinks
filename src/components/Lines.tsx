import React from "react";

type Props = {
  className?: string;
};

export default function Lines({ className }: Props) {
  return (
    <div className="flex w-full justify-evenly">
      <svg
        width="100%"
        height="144"
        viewBox="0 0 1042 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-[144px] w-5/6 md:w-[1042px] ${className}`}
      >
        <line
          x1="0.75"
          x2="0.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
        <line
          x1="208.75"
          x2="208.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
        <line
          x1="416.75"
          x2="416.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
        <line
          x1="624.75"
          x2="624.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
        <line
          x1="832.75"
          x2="832.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
        <line
          x1="1040.75"
          x2="1040.75"
          y2="144"
          stroke="#0A0A0B"
          strokeWidth="1.5"
          className={`stroke-[#0A0A0B] dark:stroke-white ${className}`}
        />
      </svg>
    </div>
  );
}
