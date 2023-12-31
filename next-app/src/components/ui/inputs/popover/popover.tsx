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
import { getPopoverCoords } from "@/lib/placement-utils";

export type PopoverSide = "top" | "right" | "bottom" | "left";
export type PopoverAlign = "start" | "center" | "end";
export type PopoverRect = Pick<DOMRect, "left" | "top" | "height" | "width">;
export type PopoverCoords = { left: number; top: number };

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
  anchorWidth?: boolean;
}

const Popover: FC<Props> = ({
  children,
  content,
  side = "bottom",
  align = "center",
  paddingFromAnchor = 8,
  paddingFromWindow = 16,
  className = "",
  anchorWidth = false,
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
    onClick: () => setIsOpen(!isOpen), // TODO: Merge with existing onClick
    ref: anchorElementRef,
  });

  // TODO: Add click outside to close
  useLayoutEffect(() => {
    // Update popover position according to anchor element position
    if (!dialogElement || !anchorElement || !isOpen) return;

    // Set popover width to anchor width
    if (anchorWidth && anchorElement) {
      dialogElement.style.width = `${anchorElement.getBoundingClientRect().width.toString()}px`;
    }

    const updatePosition = () => {
      const popoverRect = dialogElement.getBoundingClientRect();
      const anchor = anchorElement.getBoundingClientRect();

      // Get new popover coordinates based in anchor and popover rects
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

    // Handler to close popover if click is outside dialog element
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogElement &&
        !dialogElement.contains(event.target as Node | null) &&
        !anchorElement.contains(event.target as Node | null) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    // Call once to set initial position
    updatePosition();

    // Add resize listener to update position when window resizes
    window.addEventListener("resize", updatePosition);

    // Add click listener to close popover when clicking outside
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, side, align]);

  return (
    <>
      {anchorElementClone}
      <dialog
        open={isOpen}
        ref={dialogRef}
        className={cn(
          "z-10 m-0 fixed bg-transparent animate-in fade-in-25",
          className
        )}
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

export { Popover };
