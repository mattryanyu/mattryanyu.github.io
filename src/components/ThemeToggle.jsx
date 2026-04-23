import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`fixed top-4 right-4 z-50 p-2.5 rounded-full shadow-lg border hover:scale-110 transition-all cursor-pointer ${
        theme === "dark"
          ? "bg-white/5 backdrop-blur-md border-white/15 text-white hover:bg-white/15"
          : "bg-base-content/5 backdrop-blur-md border-base-content/10 text-base-content hover:bg-base-content/10"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
