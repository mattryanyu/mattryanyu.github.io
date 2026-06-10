import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",          href: "#about" },
  { label: "Projects",       href: "#projects" },
  { label: "Experience",     href: "#experience" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Beyond Work",    href: "#beyond-work" },
  { label: "Contact",        href: "#contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`site-nav fixed top-0 left-0 right-0 z-50 border-b ${
          scrolled
            ? "bg-base-100/90 backdrop-blur-xl border-base-content/10 shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
            : "bg-base-100/60 backdrop-blur-md border-base-content/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0 relative z-50">
            <img src="/favicon-clr.svg" className="h-7 w-auto" alt="logo" />
            <span className="font-semibold tracking-tight text-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Matt Yu
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-link text-base-content/60 hover:text-base-content transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 relative z-50">
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

            {/* Animated hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className={`menu-bar ${isOpen ? "bar-open-1" : ""}`} />
              <span className={`menu-bar ${isOpen ? "bar-open-2" : ""}`} />
              <span className={`menu-bar ${isOpen ? "bar-open-3" : ""}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen overlay — always in DOM for smooth GPU animation */}
      <div className={`fullscreen-menu md:hidden bg-base-100/96 backdrop-blur-2xl ${isOpen ? "menu-open" : ""}`}>

        {/* Overlay header */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-base-content/8 shrink-0">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img src="/favicon-clr.svg" className="h-6 w-auto" alt="logo" />
            <span className="font-semibold text-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Matt Yu
            </span>
          </a>
        </div>

        {/* Centered nav links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-8 py-10">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="fullscreen-link group flex items-baseline gap-4 py-3 w-full max-w-xs"
              style={{ transitionDelay: isOpen ? `${i * 65 + 80}ms` : "0ms" }}
            >
              <span
                className="text-xs font-medium tabular-nums bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent shrink-0"
                style={{ letterSpacing: "0.08em" }}
              >
                0{i + 1}
              </span>
              <span className="font-display text-4xl font-semibold tracking-tight text-base-content group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-indigo-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer strip */}
        <div className="px-8 pb-10 shrink-0">
          <p className="text-xs text-base-content/30 tracking-widest uppercase">
            Seattle, WA · mattryanyu.github.io
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
