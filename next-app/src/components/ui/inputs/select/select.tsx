"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Popover } from "../popover/popover";
import { Input } from "../input/input";

interface Props {
  value: string | null;
  handleChange: (newValue: string | null) => void;
  options: Array<{
    label: string;
    value: string;
  }>;
}

const Select: React.FC<Props> = ({ value, handleChange, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    console.log(inputRef);
    if (inputRef.current) {
      console.log("FOCUS");
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    console.log("LOSE FOCUS");
    setIsFocused(false);
  };

  const handleClickOnOption = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("Click on option");

    event.preventDefault();

    handleFocus();
  };

  useLayoutEffect(() => {
    console.log(inputRef)
  }, [inputRef.current])

  return (
    <Popover
      paddingFromAnchor={4}
      anchorWidth
      content={
        <div className="bg-white h-[200px] rounded-lg flex flex-col border border-gray-200">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex p-2 hover:bg-gray-100 rounded-lg"
              onClick={handleClickOnOption}
            >
              <span className="text-sm ">{option.label}</span>
            </div>
          ))}
        </div>
      }
    >
      <input ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} />
    </Popover>
  );
};

export default Select;
