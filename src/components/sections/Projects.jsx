import Reveal from "../Reveal";

export default function Projects({ resume }) {
  return (
    <section id="projects" className="bg-base-100 px-6 py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-base-content">Projects</h2>
          <p className="mb-8 text-base text-base-content/50">Things I've built outside of work.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resume.projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card bg-base-200 border border-base-content/10 hover:border-primary/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="card-body p-6 gap-3 text-left">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-base-content group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-base-content/30 group-hover:text-primary transition-colors text-sm shrink-0 mt-0.5">↗</span>
                  </div>
                  <p className="text-base text-base-content/60 leading-snug">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="badge badge-ghost badge-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
