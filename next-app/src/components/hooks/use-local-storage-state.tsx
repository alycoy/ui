import React from "react";

export const useLocalStorageState = <T,>(key: string, defaultValue: T) => {


  // Get the value from local storage or use the default value
  const storedValue = localStorage.getItem(key);
  const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;

  // State to hold the current value
  const [value, setValue] = React.useState<T>(initialValue);

  // Set the value in local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
