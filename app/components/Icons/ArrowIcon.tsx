import React, { SVGProps } from "react";

const SvgComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4754 0.446459C12.8415 0.812572 12.8415 1.40617 12.4754 1.77229L7.16291 7.08475C6.7968 7.45087 6.2032 7.45087 5.83708 7.08475L0.524584 1.77229C0.158472 1.40617 0.158472 0.812572 0.524584 0.446459C0.890697 0.0803469 1.4843 0.0803469 1.85041 0.446459L6.5 5.09605L11.1496 0.446459C11.5157 0.0803469 12.1092 0.0803469 12.4754 0.446459Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
