import React from "react";
import clsx from "clsx";

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
        "bg-black text-white flex justify-between items-center px-4 h-10 cursor-pointer flex-none rounded-md",
        !isCollapsed && "rounded-b-none",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {/* Title */}
      <span className="truncate">{title}</span>
      <span className="float-right transform transition-transform duration-200 text-xs scale-y-50">
        {isCollapsed ? "▼" : "▲"}
      </span>
    </div>
  );
};

export default CardHeader;
