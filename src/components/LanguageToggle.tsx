import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface LanguageToggleProps {
  setLanguage: (lang: string) => void;
}

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  setLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    if (newLanguage) {
      setSelectedLanguage(newLanguage);
      setLanguage(newLanguage);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedLanguage}
      exclusive
      onChange={handleLanguageChange}
    >
      {languages.map((lang) => (
        <ToggleButton key={lang.value} value={lang.value}>
          {lang.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
