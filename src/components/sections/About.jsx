import Reveal from "../Reveal";
import robot from "../../assets/img/robot.jpg";

export default function About({ resume }) {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
        >
          <defs>
            <pattern x="50%" y={-1} id="about-grid" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#about-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Reveal>
                <div className="flex justify-center">
                  <span>
                    <img src="/favicon-clr.svg" className="h-20" alt="logo" />
                  </span>
                </div>
                <p className="text-base/7 font-semibold text-primary">{resume.location}</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-base-content sm:text-5xl">
                  {resume.headline}
                </h1>
              </Reveal>
              {resume.summaries.map((summary, i) => (
                <Reveal key={i}>
                  <p className="mt-6 text-xl/8 text-base-content/80">{summary}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Reveal>
            <div className="relative inline-block">
              <img
                alt="UiPath conference in Las Vegas"
                src={robot}
                className="w-120 max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-tight shadow-[0_4px_20px_rgba(255,255,255,0.15)] pointer-events-none">
                UiPath conference in Las Vegas, Nevada
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
