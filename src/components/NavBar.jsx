import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Beyond Work",    href: "#beyond-work" },
  { label: "Contact",        href: "#contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
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

          <div className="flex items-center gap-3">
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
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1 text-base-content/70 hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 z-50 bg-base-100 shadow-xl flex flex-col transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 h-14 border-b border-base-content/10">
          <span className="font-semibold text-sm text-base-content">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-1 text-base-content/70 hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-base text-base-content/70 hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
