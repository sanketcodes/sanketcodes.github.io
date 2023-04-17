import { useEffect, useState } from "react";

const useColorTheme = () => {
  let [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeSwitch = theme => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "forest" : "light"
    );
    localStorage.theme = theme ? "forest" : "light";
    setIsDarkTheme(theme);
  };

  useEffect(() => {
    if (
      localStorage.theme === "forest" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "forest");
      localStorage.theme = "forest";
      setIsDarkTheme(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.theme = "light";
      setIsDarkTheme(false);
    }
  }, []);

  return {
    isDarkTheme,
    handleThemeSwitch
  };
};

export default useColorTheme;
