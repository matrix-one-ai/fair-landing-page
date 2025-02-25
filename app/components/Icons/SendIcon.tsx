import React, { SVGProps } from "react";

const SvgComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.464355" width="17" height="17" rx="5" fill="#FF5F00" />
      <path
        d="M13.9173 3.54761L7.95898 9.50594"
        stroke="#D9D9D9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9173 3.54761L10.1257 14.3809L7.95898 9.50594L3.08398 7.33927L13.9173 3.54761Z"
        stroke="#D9D9D9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgComponent;
