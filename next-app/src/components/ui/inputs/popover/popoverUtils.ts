import {
  PopoverCoords,
  PopoverAlign,
  PopoverRect,
  PopoverSide,
} from "./popover";

export const getPopoverCoords = (
  side: PopoverSide,
  align: PopoverAlign,
  anchor: PopoverRect,
  popover: PopoverRect,
  paddingFromAnchor: number,
  paddingFromWindow: number
): PopoverCoords => {
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;

  let left = 0;
  let top = 0;

  const setHorizontalStart = () => {
    left = anchor.left - popover.width - paddingFromAnchor;
  };

  const setHorizontalCenter = () => {
    left = anchor.left + anchor.width / 2 - popover.width / 2;
  };

  const setHorizontalEnd = () => {
    left = anchor.left + anchor.width + paddingFromAnchor;
  };

  const setVerticalStart = () => {
    top = anchor.top - popover.height - paddingFromAnchor;
  };

  const setVerticalCenter = () => {
    top = anchor.top + anchor.height / 2 - popover.height / 2;
  };

  const setVerticalEnd = () => {
    top = anchor.top + anchor.height + paddingFromAnchor;
  };

  const setHorizontalFailover = () => {
    if (left < paddingFromWindow) {
      setHorizontalEnd();
    }

    if (left + popover.width + paddingFromWindow > pageWidth) {
      setHorizontalStart();
    }
  };

  const setVerticalFailover = () => {
    if (top < paddingFromWindow) {
      setVerticalEnd();
    }

    if (top + popover.height + paddingFromWindow > pageHeight) {
      setVerticalStart();
    }
  };

  switch (side) {
    case "bottom":
    case "top":
      if (side === "top") {
        setVerticalStart();
      } else {
        setVerticalEnd();
      }
      switch (align) {
        case "start":
          setHorizontalStart();
          break;
        case "center":
          setHorizontalCenter();
          break;
        case "end":
          setHorizontalEnd();
          break;
      }
      break;
    case "right":
    case "left":
      if (side === "left") {
        setHorizontalStart();
      } else {
        setHorizontalEnd();
      }

      switch (align) {
        case "start":
          setVerticalStart();
          break;
        case "center":
          setVerticalCenter();
          break;
        case "end":
          setVerticalEnd();
          break;
      }
      break;
  }

  setHorizontalFailover();
  setVerticalFailover();

  return {
    top,
    left,
  };
};
