import { cn } from "@/lib/utils";
import React from "react";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
        <div
          className="w-11 h-6 bg-primary-foreground rounded-full peer peer-focus-visible:ring-1 peer-focus-visible:ring-primary peer-checked:after:translate-x-full peer-checked:bg-primary peer-checked:after:bg-white after:absolute after:top-0.5 after:left-[2px] after:bg-gray-200 after:border after:border-input-border after:rounded-full after:h-5 after:w-5 after:transition-all peer-disabled:cursor-not-allowed peer-disabled:opacity-40 border border-input-border 
        "
        />
      </label>
    );
  }
);

export { Switch };
