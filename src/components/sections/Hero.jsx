import cover from "../../assets/img/cover.jpg";

export default function Hero() {
  return (
    <div
      className="hero min-h-[calc(100vh-3.5rem)] bg-center bg-cover"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="hero-overlay" style={{ backgroundColor: "rgba(8, 8, 18, 0.58)" }} />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

      <div className="hero-content text-neutral-content text-center relative z-10 px-6">
        <div className="max-w-4xl flex flex-col items-center gap-8">

          {/* Headline */}
          <h1
            className="hero-animate font-display font-semibold text-white tracking-tight leading-[0.88]"
            style={{ fontSize: "clamp(3.75rem, 11vw, 9.5rem)", animationDelay: "0.28s" }}
          >
            Hi, I'm Matt.
          </h1>

          {/* Subheadline */}
          <p
            className="hero-animate text-white/85 font-light text-pretty max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", letterSpacing: "0.01em", lineHeight: 1.65, animationDelay: "0.52s" }}
          >
            I turn operational complexity into intelligent, automated solutions.
          </p>

          {/* CTA */}
          <a
            href="#about"
            className="hero-animate group inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-black/40 backdrop-blur-md text-white font-medium hover:bg-black/55 hover:border-white/70 transition-all duration-300"
            style={{ padding: "0.85rem 1.75rem", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", animationDelay: "0.78s", color: "white" }}
          >
            Explore my work
            <svg
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}
