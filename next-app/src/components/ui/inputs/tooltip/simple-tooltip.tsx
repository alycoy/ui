"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, useState } from "react";


// Negative top, bottom, left and right values are being used as a hack to margin the tooltip
const tooltipVariants = cva(
  "absolute border border-gray-200 rounded-lg p-2 z-50 whitespace-nowrap shadow-md bg-white",
  {
    variants: {
      placement: {
        top: "-top-1 -translate-y-full left-1/2 -translate-x-1/2",
        bottom: "-bottom-1 translate-y-full left-1/2 -translate-x-1/2",
        left: "-left-1 -translate-x-full top-1/2 -translate-y-1/2 ",
        right: "-right-1 translate-x-full top-1/2 -translate-y-1/2",
      },
    },
    defaultVariants: {
      placement: "top",
    },
  }
);

interface Props extends VariantProps<typeof tooltipVariants> {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip: FC<Props> = ({ children, placement, content }) => {
  const [active, setActive] = useState(true);
  let timeout: NodeJS.Timeout;

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      role="tooltip"
      className="relative inline-block peer"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={cn(tooltipVariants({ placement }))}>{content}</div>
      )}
    </div>
  );
};

export { Tooltip };
