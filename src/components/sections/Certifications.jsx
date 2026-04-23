import Reveal from "../Reveal";
import diving from "../../assets/img/diving.png";

export default function Certifications({ resume }) {
  return (
    <div id="certifications" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
        >
          <defs>
            <pattern x="50%" y={-1} id="certs-grid" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-base-content/10">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#certs-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Reveal>
            <div className="relative inline-block">
              <img
                alt="Diving in Thailand"
                src={diving}
                className="w-full max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-tight shadow-[0_4px_20px_rgba(255,255,255,0.15)] pointer-events-none">
                Koh Phi Phi Leh, Thailand
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-base-content/60 lg:max-w-lg">
              <Reveal>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-base-content">Certifications</h2>
                <div className="flex flex-col gap-4">
                  {resume.certifications.map((group) => (
                    <div key={group.group} className="card bg-base-300 border border-base-content/10">
                      <div className="card-body p-4 gap-3">
                        <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                          {group.group}
                        </p>
                        <div className="divide-y divide-base-content/10">
                          {group.items.map((cert, i) => {
                            const Tag = cert.url ? "a" : "div";
                            const linkProps = cert.url
                              ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                              : {};
                            return (
                              <Tag
                                key={i}
                                {...linkProps}
                                className={`flex items-center justify-between gap-3 py-2.5 text-left group ${cert.url ? "cursor-pointer" : ""}`}
                              >
                                <div>
                                  <p className={`text-sm font-medium text-base-content leading-snug ${cert.url ? "group-hover:text-primary transition-colors" : ""}`}>
                                    {cert.name}
                                  </p>
                                  <p className="text-xs text-base-content/40 mt-0.5">{cert.issuer}</p>
                                </div>
                                {cert.url && (
                                  <span className="text-base-content/20 group-hover:text-primary transition-colors text-xs shrink-0 select-none">↗</span>
                                )}
                              </Tag>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="mt-10 mb-6 text-2xl font-bold tracking-tight text-base-content">Beyond Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resume.interests.map((item, i) => (
                    <div key={i} className="card bg-base-300 border border-base-content/10">
                      <div className="card-body p-5 gap-2 text-left">
                        <span className="text-3xl">{item.emoji}</span>
                        <p className="text-sm font-bold text-base-content">{item.title}</p>
                        <p className="text-sm text-base-content/60 leading-snug">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
