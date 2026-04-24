import Reveal from "../Reveal";
import biking from "../../assets/img/biking.jpg";

export default function Skills({ resume }) {
  return (
    <div id="skills" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
        >
          <defs>
            <pattern x="50%" y={-1} id="skills-grid" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-base-content/10">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#skills-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Reveal>
            <div className="relative inline-block">
              <img
                alt="Cycling near Walter Peak, New Zealand"
                src={biking}
                className="w-full max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-tight shadow-[0_4px_20px_rgba(255,255,255,0.15)] pointer-events-none">
                Lake Wakatipu near Walter Peak, New Zealand
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-base-content/60 lg:max-w-lg">
              <Reveal>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-base-content">Skills</h2>
                <p className="mb-8 text-sm text-base-content/50"></p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {resume.skills.map((pillar, i) => (
                  <Reveal key={i}>
                    <div className="card bg-base-300 border border-base-content/10 h-full">
                      <div className="card-body p-6 text-left gap-3">
                        <p className="text-lg font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                          {pillar.title}
                        </p>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                          {pillar.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {pillar.highlights.map((h, j) => (
                            <span className="badge badge-ghost badge-md" key={j}>{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
