"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/inputs/button/button";
import { useLocalStorageState } from "./hooks/use-local-storage-state";
import { Switch } from "./ui/inputs/switch/simple-switch";

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return <Switch onChange={handleThemeChange} />;
};

export { ThemeSwitch };
