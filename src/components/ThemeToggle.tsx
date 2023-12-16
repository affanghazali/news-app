import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface ThemeToggleProps {
  handleThemeChange: (theme: "light" | "dark") => void;
}

const themes = [
  { value: "light", label: "Light Theme" },
  { value: "dark", label: "Dark Theme" },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  handleThemeChange,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  const handleThemeToggle = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: "light" | "dark"
  ) => {
    if (newTheme) {
      setSelectedTheme(newTheme);
      handleThemeChange(newTheme);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedTheme}
      exclusive
      onChange={handleThemeToggle}
    >
      {themes.map((theme) => (
        <ToggleButton key={theme.value} value={theme.value}>
          {theme.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
