import Reveal from "../Reveal";

export default function BeyondWork({ resume }) {
  return (
    <section
      id="beyond-work"
      className="bg-base-200 px-6 py-16 sm:py-24 scroll-mt-14"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-base-content text-left">
            Beyond Work
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {resume.interests.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-content/8 hover:shadow-md transition-shadow duration-300 text-left h-full">

                {/* Watermark emoji */}
                <div
                  className="absolute -right-3 -top-3 leading-none select-none pointer-events-none opacity-[0.07] text-base-content"
                  style={{ fontSize: "6rem" }}
                >
                  {item.emoji}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3">
                  <span className="text-4xl leading-none">{item.emoji}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-base-content">
                    {item.title}
                  </h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom gradient accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
