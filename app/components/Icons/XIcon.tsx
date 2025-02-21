import React, { SVGProps } from "react";

const SvgComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_336_20476)">
        <path
          d="M13.0222 0.925903H15.4341L10.1648 6.91889L16.3637 15.074H11.51L7.70846 10.128L3.35865 15.0741H0.945318L6.58132 8.66386L0.634766 0.925903H5.6116L9.04788 5.44683L13.0222 0.925903ZM12.1757 13.6375H13.5122L4.88543 2.28702H3.45126L12.1757 13.6375Z"
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <clipPath id="clip0_336_20476">
          <rect
            width="15.729"
            height="14.1482"
            fill="white"
            transform="translate(0.634766 0.925903)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgComponent;
