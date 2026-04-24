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
        <label className="switch shrink-0" aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <span className="slider">
            <div className="star star_1"></div>
            <div className="star star_2"></div>
            <div className="star star_3"></div>
            <svg viewBox="0 0 16 16" className="cloud_1 cloud">
              <path
                transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                fill="#fff"
                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
              ></path>
            </svg>
          </span>
        </label>

      </div>
    </nav>
  );
};

export default NavBar;
