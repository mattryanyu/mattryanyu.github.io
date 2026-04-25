import Reveal from "../Reveal";
import biking from "../../assets/img/biking.jpg";
import ReactCountryFlag from "react-country-flag";

export default function Skills({ resume }) {
  return (
    <div id="experience" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
        >
          <defs>
            <pattern x="50%" y={-1} id="experience-grid" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#experience-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-base-content">Experience</h2>
          <p className="mb-8 text-sm text-base-content/50"></p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {resume.skills.map((pillar, i) => (
            <Reveal key={i}>
              <div className="card bg-base-300 border border-base-content/10 h-full">
                <div className="card-body p-6 text-left gap-0">
                  <p className="text-lg font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {pillar.title}
                  </p>
                  <p className="text-sm text-base-content/60 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {pillar.highlights.map((h, j) => (
                      <span className="badge badge-ghost badge-md" key={j}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative my-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-base-content/10">
            <img
              alt="Cycling near Walter Peak, New Zealand"
              src={biking}
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-tight shadow-[0_4px_20px_rgba(255,255,255,0.15)] pointer-events-none">
              Lake Wakatipu near Walter Peak, New Zealand
            </div>
          </div>
        </Reveal>

        {resume.experience.map((item, i) => (
          <ul key={i} className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-base-content/80 pt-2">
            <li>
              <hr className="bg-base-content/20" />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 text-left md:text-end">
                <Reveal>
                  <time className="font-mono">{item.year}</time>
                  <div className="text-lg font-semibold tracking-tight text-pretty">{item.role}</div>
                  <span className="tracking-tight text-pretty">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors group">
                        {item.company}
                        <span className="ml-1 text-base-content/30 group-hover:text-primary transition-colors text-xs">↗</span>
                      </a>
                    ) : item.company}
                    <br />
                    {item.locations.map((loc, j) => (
                      <span key={j}>
                        {j > 0 && <span className="mx-1.5 text-base-content/30">·</span>}
                        <ReactCountryFlag countryCode={loc.flagCode} svg className="mr-1 align-middle" style={{ width: "1.1em", height: "1.1em" }} />
                        {loc.city}
                      </span>
                    ))}
                  </span>
                  {item.tagline && (
                    <p className="mt-2 text-sm text-base-content/50 leading-snug">{item.tagline}</p>
                  )}
                </Reveal>
              </div>
              <hr className="bg-base-content/20" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
