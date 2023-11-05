"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "./input";

const MaskedInput = () => {
  const [inputValue, setInputValue] = useState("");
  const mask = "00000-0000";
  const freeChar = "0";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    console.log(value)

    let formattedValue = "";

    for (let i = 0, j = 0; i < mask.length && j < value.length; i++) {
      if (mask[i] === freeChar) {
        formattedValue += value[j];
        j++;
      } else {
        if (value[j] === mask[i]) {
          j++;
        }
        formattedValue += mask[i];
      }
    }

    setInputValue(formattedValue);
  };

  return <Input onChange={handleChange} value={inputValue} />;
};

export { MaskedInput };
