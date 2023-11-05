import { cn } from "@/lib/utils";
import React from "react";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const CustomSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, value = "switch", ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={cn("sr-only peer", className)}
          ref={ref}
          value={value}
          {...props}
        />
        <div className="w-11 h-6 bg-primary-foreground rounded-full peer peer-focus:ring-1 peer-focus:ring-ring dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary disabled:cursor-not-allowed disabled:opacity-50 border border-border" />
      </label>
    );
  }
);

export { CustomSwitch };
