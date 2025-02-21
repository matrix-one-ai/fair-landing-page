"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import CardHeader from "./CardHeader";
import { useToggle } from "@/app/hooks/useToggle";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  uncollapsible?: boolean;
  children?: React.ReactNode;
  contentClassName?: string;
}

const Card: React.FC<ICardProps> = ({
  className,
  title,
  uncollapsible = false,
  children,
  contentClassName,
  ...rest
}) => {
  const [isCollapsed, { toggle: toggleIsCollapsed }] = useToggle(true);

  useEffect(() => {
    toggleIsCollapsed();
  }, [toggleIsCollapsed]);

  return (
    <div className={clsx("flex flex-col bg-main w-full", className)} {...rest}>
      {/* Header */}
      <CardHeader
        title={title}
        isCollapsed={isCollapsed}
        onClick={uncollapsible ? undefined : toggleIsCollapsed}
      />
      {/* Content */}
      <div
        className={clsx(
          "transition-all origin-top w-full px-4 overflow-hidden border-2 border-t-0 border-black ",
          isCollapsed
            ? "scale-y-0 opacity-0 !h-0 py-0"
            : "scale-y-100 opacity-100 h-auto py-4 rounded-b-md",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
