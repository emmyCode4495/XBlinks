"use client";

import React, { useState, useEffect } from "react";

const AnimatedBackground: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const generateRandomLine = () => {
      const startX = Math.random() * dimensions.width;
      const startY = Math.random() * dimensions.height;
      const endX = Math.random() * dimensions.width;
      const endY = Math.random() * dimensions.height;
      return `M${startX},${startY} L${endX},${endY}`;
    };

    const newLines = Array(10)
      .fill(null)
      .map(() => generateRandomLine());
    setLines(newLines);
  }, [dimensions]);

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
        {lines.map((line, i) => (
          <path
            key={i}
            d={line}
            stroke="url(#gradient)"
            strokeWidth="2"
            className={`animate-draw-line opacity-${Math.floor(Math.random() * 3) + 3}0`}
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
