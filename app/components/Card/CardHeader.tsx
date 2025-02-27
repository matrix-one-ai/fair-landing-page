import React from "react";
import clsx from "clsx";
import ArrowIcon from "@/app/components/Icons/ArrowIcon";

interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isCollapsed: boolean;
}

const CardHeader: React.FC<ICardHeaderProps> = ({
  className,
  title,
  isCollapsed,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "bg-black text-white flex justify-between items-center px-4 h-10 cursor-pointer flex-none rounded-md shadow-card",
        !isCollapsed && "rounded-b-none",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {/* Title */}
      <span className="truncate">{title}</span>
      <span className="float-right transform transition-transform duration-200 text-xs">
        <ArrowIcon className={clsx(!isCollapsed && "rotate-180")} />
      </span>
    </div>
  );
};

export default CardHeader;
