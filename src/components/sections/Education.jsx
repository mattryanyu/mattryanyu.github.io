import Reveal from "../Reveal";

export default function Education({ resume }) {
  return (
    <section id="education" className="relative isolate overflow-hidden bg-base-300 px-6 py-16 sm:py-20 lg:px-8 scroll-mt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-base-content">Education</h2>
          {resume.education.map((ed, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start text-left">
              <div className="shrink-0 border border-base-content/10 rounded-2xl bg-base-300/60 px-7 py-5">
                <p className="text-base font-semibold text-base-content">{ed.school}</p>
                <p className="text-sm text-base-content/60 mt-1">{ed.degree} · {ed.major}</p>
                <p className="text-xs text-base-content/40 mt-1">{ed.to}</p>
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-base text-base-content/70 leading-relaxed">{ed.narrative}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
