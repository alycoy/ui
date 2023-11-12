"use client";
import {
  FC,
  ReactElement,
  cloneElement,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { PopoverAlign, PopoverCoords, PopoverSide } from "../popover/popover";
import { getPopoverCoords } from "@/lib/placement-utils";

interface Props
  extends Omit<
    React.HTMLAttributes<HTMLDialogElement>,
    "content" | "children" | "style" | "open"
  > {
  children: ReactElement;
  content: ReactElement;
  side?: PopoverSide;
  align?: PopoverAlign;
  paddingFromAnchor?: number;
  paddingFromWindow?: number;
}

const CustomTooltip: FC<Props> = ({
  children,
  content,
  side = "top",
  align = "center",
  paddingFromAnchor = 4,
  paddingFromWindow = 16,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<PopoverCoords>({
    left: 0,
    top: 0,
  });
  
  const dialogRef = useRef<HTMLDialogElement>(null);
  const anchorElementRef = useRef<HTMLElement>(null);

  const { current: dialogElement } = dialogRef;
  const { current: anchorElement } = anchorElementRef;

  const anchorElementClone = cloneElement(children, {
    onMouseEnter: () => setIsOpen(true), // TODO: Merge current onMouseEnter
    onMouseLeave: () => setIsOpen(false), // TODO: Merge current onMouseLeave
    ref: anchorElementRef, 
  });

  // TODO: Add click outside to close
  useLayoutEffect(() => {
    if (!dialogElement || !anchorElement || !isOpen) return;
    
    // Update popover position according to anchor element position
    const updatePosition = () => {
      const popoverRect = dialogElement.getBoundingClientRect();
      const anchor = anchorElement.getBoundingClientRect();

      const newCoords = getPopoverCoords(
        side,
        align,
        anchor,
        popoverRect,
        paddingFromAnchor,
        paddingFromWindow
      );
      setCoords(newCoords);
    };

    // Call once to set initial position
    updatePosition();
  }, [isOpen, side, align]);

  return (
    <>
      {anchorElementClone}
      <dialog
        open={isOpen}
        ref={dialogRef}
        className={cn("z-10 m-0 fixed bg-transparent animate-in fade-in-25", className)}
        style={{
          left: `${coords.left}px`,
          top: `${coords.top}px`,
        }}
        {...props}
      >
        {content}
      </dialog>
    </>
  );
};

export { CustomTooltip };
