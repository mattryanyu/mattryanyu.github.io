import Reveal from "../Reveal";

function thumbnailUrl(filename) {
  return new URL(`../../assets/img/${filename}`, import.meta.url).href;
}

export default function Projects({ resume }) {
  return (
    <section id="projects" className="bg-base-100 px-6 py-16 scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-base-content">Projects</h2>
          <p className="mb-8 text-base text-base-content/50">Things I've built outside of work.</p>
          <div className="grid grid-cols-1 gap-6">
            {resume.projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-base-content/10 bg-base-200 overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {project.thumbnail ? (
                  <div className="relative overflow-hidden aspect-[16/9] bg-base-300">
                    <img
                      src={thumbnailUrl(project.thumbnail)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-base-300 to-secondary/10" />
                )}

                <div className="flex flex-col flex-1 p-5 gap-3 text-left">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-base-content group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-base-content/30 group-hover:text-primary transition-colors shrink-0 mt-0.5">↗</span>
                  </div>
                  <p className="text-sm text-base-content/60 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded-full text-xs font-medium bg-base-content/8 text-base-content/50 border border-base-content/10"
                      >
                        {tag}
                      </span>
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
