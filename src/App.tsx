// src/App.tsx
import React, { useState, useEffect } from "react";
import {
  Chip,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NewsList from "./components/NewsList";
import { LanguageToggle } from "./components/LanguageToggle";
import { ThemeToggle } from "./components/ThemeToggle";

const topics = ["apple", "meta", "netflix", "google", "twitter", "tesla"];

function App() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState(createTheme());
  const [selectedTopic, setSelectedTopic] = useState("apple"); // Default topic

  useEffect(() => {
    // Adjust theme based on selected language (LTR / RTL)
    setTheme(
      createTheme({
        direction: language === "ar" ? "rtl" : "ltr",
        palette: {
          mode: theme.palette.mode, // Preserve the mode (light/dark)
        },
      })
    );
  }, [language, theme.palette.mode]);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(
      createTheme({
        direction: language === "ar" ? "rtl" : "ltr",
        palette: {
          mode: newTheme,
        },
      })
    );
  };

  const handleTopicChange = (newTopic: string) => {
    setSelectedTopic(newTopic);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        >
          <LanguageToggle setLanguage={setLanguage} />
          <ThemeToggle handleThemeChange={handleThemeChange} />
        </div>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {topics.map((topic) => (
            <Chip
              key={topic}
              label={topic.charAt(0).toUpperCase() + topic.slice(1)} // Capitalize the first letter
              clickable
              color={selectedTopic === topic ? "primary" : "default"}
              onClick={() => handleTopicChange(topic)}
              style={{ marginRight: "8px" }}
            />
          ))}
        </div>
        <NewsList language={language} selectedTopic={selectedTopic} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
