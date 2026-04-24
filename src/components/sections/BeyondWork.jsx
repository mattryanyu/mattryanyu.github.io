import Reveal from "../Reveal";

export default function Education({ resume }) {
  return (
    <section id="beyond-work" className="relative isolate overflow-hidden bg-base-300 px-6 py-16 sm:py-20 lg:px-8 scroll-mt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-base-content">Beyond Work</h2>
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
    </section>
  );
}
