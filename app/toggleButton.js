"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    // Prevent hydration mismatch by not rendering theme-dependent stuff until mounted
    return (
      <Button variant="outline" size="icon">
        <Moon className="h-4 w-4" />
      </Button>
    );
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          currentTheme == "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {currentTheme == "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    </>
  );
};

export default ToggleButton;
