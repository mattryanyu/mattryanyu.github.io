import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education",      href: "#education" },
  { label: "Contact",        href: "#contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/70 backdrop-blur-md border-b border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo + name */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src="/favicon-clr.svg" className="h-7 w-auto" alt="logo" />
          <span className="font-semibold tracking-tight text-base-content text-sm">
            Matt Yu
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-base-content/70 hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`shrink-0 p-2 rounded-full border hover:scale-110 transition-all cursor-pointer ${
            theme === "dark"
              ? "bg-white/5 backdrop-blur-md border-white/15 text-white hover:bg-white/15"
              : "bg-base-content/5 backdrop-blur-md border-base-content/10 text-base-content hover:bg-base-content/10"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
};

export default NavBar;
