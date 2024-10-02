import React from "react";

interface XblinksLogoProps extends React.SVGProps<SVGSVGElement> {
  outerStrokeColor?: string;
  innerStrokeColor?: string;
  fillColor?: string;
}

export const XblinksLogo: React.FC<XblinksLogoProps> = ({
  outerStrokeColor = "currentColor",
  innerStrokeColor = "currentColor",
  fillColor = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 93 221"
      aria-labelledby="xblinks-logo"
      {...props}
    >
      <title id="xblinks-logo">XBlinks</title>
      <rect
        width="81"
        height="117"
        x="6"
        y="55"
        stroke={outerStrokeColor}
        strokeWidth="5"
        rx="25"
        fill="none"
      />
      <rect
        width="47"
        height="93"
        x="22"
        y="68"
        stroke={innerStrokeColor}
        strokeWidth="5"
        rx="23.5"
        fill="none"
      />
      <rect
        width="24"
        height="93"
        x="33"
        y="3"
        fill={fillColor}
        stroke={outerStrokeColor}
        strokeWidth="5"
        rx="12"
      />
      <rect
        width="24"
        height="93"
        x="33"
        y="125"
        fill={fillColor}
        stroke={outerStrokeColor}
        strokeWidth="5"
        rx="12"
      />
    </svg>
  );
};

export default XblinksLogo;
