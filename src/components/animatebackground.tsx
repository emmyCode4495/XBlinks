import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <path
            key={i}
            d={`M${-1000 + Math.random() * 2000},${-1000 + Math.random() * 2000} l2000,2000`}
            stroke="url(#gradient)"
            strokeWidth="2"
            className={`animate-draw-line opacity-${Math.floor(Math.random() * 3) + 3}0`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
