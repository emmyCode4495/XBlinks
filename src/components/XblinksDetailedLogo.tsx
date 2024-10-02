import React from "react";

interface XblinksDetailedLogoProps extends React.SVGProps<SVGSVGElement> {
  primaryColor?: string;
}

export const XblinksDetailedLogo: React.FC<XblinksDetailedLogoProps> = ({
  primaryColor = "#6ACBFA",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="60"
      fill="none"
      viewBox="0 0 121 60"
      {...props}
    >
      <rect
        width="20"
        height="28.9"
        x="2"
        y="16.2"
        stroke={primaryColor}
        strokeWidth="1.2"
        rx="6.2"
      />
      <rect
        width="11.6"
        height="23"
        x="5.9"
        y="19.4"
        stroke={primaryColor}
        strokeWidth="1.2"
        rx="5.8"
      />
      <rect
        width="5.9"
        height="23"
        x="8.6"
        y="3.3"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1.2"
        rx="3"
      />
      <rect
        width="5.9"
        height="23"
        x="8.6"
        y="33.5"
        fill={primaryColor}
        stroke={primaryColor}
        strokeWidth="1.2"
        rx="3"
      />
      <rect
        width="2.2"
        height="50.6"
        x="27.2"
        y="6.8"
        fill={primaryColor}
        rx="1.1"
        transform="rotate(-13.3 27.2 6.8)"
      />
      <rect
        width="2.2"
        height="50.6"
        x="39.3"
        y="6.3"
        fill={primaryColor}
        rx="1.1"
        transform="rotate(14.4 39.3 6.3)"
      />
      <path
        fill={primaryColor}
        d="M56.4 16a5.4 5.4 0 01-5.5 5.8l1 .4a7.4 7.4 0 014.5 6.8v21.8c0 1.4-.7 2.6-1.7 3.5l-.7.5c-3.1 2.4-7.7 1.5-10.5-1.3.9-7 2.5-3 2.5-3v.5c0 2.5 2.6 4.2 4.8 3.1 2-.9 3.4-3 3.4-5.2l-.4-20a5 5 0 00-3.5-4.7l-1.5-.5a.7.7 0 01-.5-.7v-2.8c0-.3.2-.5.5-.5 2.8.6 5.4-1.5 5.4-4.4V13a4.4 4.4 0 10-8.8 0v22l.6 15.5s-1.6-4.1-2.5 2.9L43.4 35V12.9a6.4 6.4 0 0112.7-.4l.3 3.5zm2.3-8.2c0-.6.4-1 1-1h.2c.6 0 1 .4 1 1v42.5a3.8 3.8 0 007.6 0V36.8c0-.6.4-1 1-1h.3c.6 0 1 .4 1 1V52a3.9 3.9 0 01-3.9 4h-5a3.3 3.3 0 01-3.2-3.4V7.8z"
      />
      <rect
        width="2.2"
        height="49.1"
        x="72.8"
        y="6.8"
        fill={primaryColor}
        rx="1.1"
      />
      <path
        fill={primaryColor}
        d="M78.2 55.6c-.7 0-1.2-.6-1.2-1.3V14.1a7 7 0 0114.1 0v40.3a1 1 0 01-2.2 0l-.3-41a4.6 4.6 0 00-9.2 0v41c0 .6-.5 1.2-1.2 1.2zM93 8.5c0-.7.6-1.2 1.3-1.2H105a1.2 1.2 0 010 2.3h-8.5l9.4 44.7a1 1 0 01-1.9.4l-8.7-39.1v38.7a1.1 1.1 0 11-2.2 0V8.5zm15.2 3.5a5 5 0 014.9-5h1.8a5 5 0 015 4.6l.5 7a1.1 1.1 0 01-2.2.3l-.4-4.1v-3.3c0-1.5-1.4-2.7-3-2.4l-2.4.5c-1.2.2-2 1.2-2 2.4v4c0 .6.2 1.1.6 1.6l9 10.4c.3.5.5 1 .5 1.7v23.1c0 1.4-1.1 2.5-2.5 2.5h-7.4a2.5 2.5 0 01-2.4-2.5V33.3a1.1 1.1 0 112.1 0l-.5 18c0 1.5 1.2 2.7 2.7 2.5l4-.3a2.5 2.5 0 002.2-2.5l-.4-19.8c0-.6-.2-1-.5-1.5l-9.2-12.3c-.3-.4-.4-.9-.4-1.4v-4z"
      />
    </svg>
  );
};

export default XblinksDetailedLogo;
