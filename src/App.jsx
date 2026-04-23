import "./App.css";
import resume from "./data/resume.json";
import ResumeSection from "./components/ResumeSection";
import Reveal from "./components/Reveal";
import NavBar from "./components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import cover from "./assets/img/cover.jpg";
import diving from "./assets/img/diving.png";
import biking from "./assets/img/biking.jpg";
import robot from "./assets/img/robot.jpg";


function App() {
  return (
    <>
      <NavBar />
      <link rel="icon" href="favicon-clr.svg" />
      <link rel="mask-icon" href="favicon-clr.svg" color="#000000" />
      <link rel="apple-touch-icon" href="favicon-clr.svg" />
      <div className="pt-14">
      <div
        className="hero h-[90vh] !min-h-[90vh] md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content text-neutral-content text-center">
          <Reveal>
            <div className="max-w-2xl flex flex-col items-center gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold tracking-tight text-pretty">
                  Hi, I'm Matt.
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-medium tracking-tight text-pretty">
                  I turn operational complexity into intelligent, automated solutions.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl text-center p-5 w-64 md:w-52 shadow-lg">
                  <p className="text-base font-semibold tracking-tight leading-snug">
                    Business Transformation &amp; Operations Leader
                  </p>
                </div>

                <span className="text-2xl font-light text-white/60 select-none">+</span>

                <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl text-center p-5 w-64 md:w-52 shadow-lg">
                  <p className="text-base font-semibold tracking-tight leading-snug">
                    Intelligent Automation Solutions Architect
                  </p>
                </div>
              </div>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 !text-white/90 text-sm font-medium tracking-wide hover:bg-white/20 transition-all shadow-lg"
              >
                Explore my work ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="about" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="about-grid"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-base-content/10">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#about-grid)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <Reveal>
                  <div className="flex justify-center">
                    {" "}
                    <span>
                      <img src="/favicon-clr.svg" className="h-20" alt="logo" />
                    </span>
                  </div>
                  <p className="text-base/7 font-semibold text-primary">
                    {resume.location}
                  </p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-base-content sm:text-5xl">
                    {resume.headline}
                  </h1>
                </Reveal>
                {resume.summaries.map((sections, i) => (
                  <Reveal>
                    <div key={i}>
                      <p className="mt-6 text-xl/8 text-base-content/80">{sections}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Reveal>
              <div class="relative inline-block">
                <img
                  alt="Cycling in New Zealand"
                  src={robot}
                  className="w-120 max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
                />

                <div
                  class="absolute bottom-3 right-3
                        px-3 py-1 rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border border-white/30
                        text-white text-xs font-medium tracking-tight
                        shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                        pointer-events-none"
                >
                  UiPath conference in Las Vegas, Nevada
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-base-300 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {resume.stats.map((stat) => (
              <Reveal>
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base/7 text-base-content/60 tracking-tight text-lg">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-base-content sm:text-5xl">
                    {stat.value}
                  </dd>
                  <br />
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      <div id="skills" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="skills-grid"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-base-content/10">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#skills-grid)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Reveal>
              <div class="relative inline-block">
                <img
                  alt="Cycling in New Zealand"
                  src={biking}
                  className="w-full max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
                />

                <div
                  class="absolute bottom-3 right-3
                        px-3 py-1 rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border border-white/30
                        text-white text-xs font-medium tracking-tight
                        shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                        pointer-events-none"
                >
                  Lake Wakatipu near Walter Peak, New Zealand
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-base-content/60 lg:max-w-lg">
                <Reveal>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-base-content">
                    Skills
                  </h2>
                </Reveal>
                <p>
                  {resume.skills.map((skills, i) => (
                    <Reveal>
                      <div key={i}>
                        <p class="text-lg mt-8 mb-2 font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                          {skills.theme}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skills.items.map((item, j) => (
                            <span className="badge badge-ghost badge-md" key={j}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeSection id="experience">
        <Reveal>
          <div class="mb-6 bg-base-200">
            <p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-base-content">
                Experience
              </h2>
            </p>
          </div>
        </Reveal>
        <br />

        {resume.experience.map((experience, i) => (
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-base-200 text-base-content/80">
            <li>
              <hr className="bg-base-content/20" />
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="grey"
                  className="h-5 w-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start mb-10 text-left md:text-end"
                key={i}
              >
                <Reveal>
                  <time className="font-mono">{experience.year}</time>
                  <div className="text-lg font-semibold tracking-tight text-pretty">
                    {experience.role}
                  </div>
                  <span className="tracking-tight text-pretty">
                    {experience.company}
                    <br />
                    {experience.location}
                  </span>
                </Reveal>
              </div>
              <hr className="bg-base-content/20" />
            </li>
          </ul>
        ))}
      </ResumeSection>

      <div id="certifications" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 scroll-mt-14">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-base-content/20"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="certs-grid"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-base-content/10">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#certs-grid)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Reveal>
              <div class="relative inline-block">
                <img
                  alt="Diving in Thailand"
                  src={diving}
                  className="w-full max-w-full h-auto rounded-xl bg-base-300 shadow-xl ring-1 ring-base-content/10"
                />

                <div
                  class="absolute bottom-3 right-3
                        px-3 py-1 rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border border-white/30
                        text-white text-xs font-medium tracking-tight
                        shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                        pointer-events-none"
                >
                  Koh Phi Phi Leh, Thailand
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-base-content/60 lg:max-w-lg">
                <Reveal>
                  <h2 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-base-content">
                    Certifications
                  </h2>
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
                                    <p className="text-xs text-base-content/40 mt-0.5">
                                      {cert.issuer}
                                    </p>
                                  </div>
                                  {cert.url && (
                                    <span className="text-base-content/20 group-hover:text-primary transition-colors text-xs shrink-0 select-none">
                                      ↗
                                    </span>
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
                  <h2 className="m-16 text-2xl font-bold tracking-tight text-base-content">
                    Interests
                  </h2>
                  <ul>
                    {resume.interests.map((s, i) => (
                      <li
                        key={i}
                        class="tracking-tight inline-flex items-center m-1 px-3 py-1 rounded-full bg-base-300 text-base-content/90 text-xl"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="education" className="relative isolate overflow-hidden bg-base-200 px-6 py-16 sm:py-20 lg:px-8 scroll-mt-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-base-content">
              Education
            </h2>
            {resume.education.map((education, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start text-left">
                <div className="shrink-0 border border-base-content/10 rounded-2xl bg-base-300/60 px-7 py-5">
                  <p className="text-base font-semibold text-base-content">{education.school}</p>
                  <p className="text-sm text-base-content/60 mt-1">{education.degree} · {education.major}</p>
                  <p className="text-xs text-base-content/40 mt-1">{education.to}</p>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-base text-base-content/70 leading-relaxed">
                    Most automation practitioners come from engineering. I came from Finance — which means I've always led with ROI, cost modeling, and operational efficiency. The automation and AI layer came later, but the business lens was there from day one.
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-base-200 px-6 py-24 sm:py-32 lg:px-8 scroll-mt-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-base font-semibold text-primary tracking-widest uppercase">Get in touch</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-base-content sm:text-5xl">
              Let's connect
            </h2>
            <p className="mt-6 text-lg text-base-content/70">
              I'm always open to new opportunities, partnerships, and conversations about automation, AI, and business transformation.
            </p>
            <a
              href="https://www.linkedin.com/in/mattryanyu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 !text-white font-semibold text-lg shadow-lg hover:opacity-90 hover:scale-105 transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Connect on LinkedIn
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-base-200 border-t border-base-content/10 text-left">

        {/* Main row */}
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-start gap-8">

          {/* Brand */}
          <div>
            <p className="text-lg font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              MATT YUNIVERSE
            </p>
            <p className="mt-1 text-sm text-base-content/50">Seattle, WA</p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-base-content/40">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/in/mattryanyu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-[18px]" />
              linkedin.com/in/mattryanyu
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-base-content/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-xs text-base-content/40">
              © {new Date().getFullYear()} Matt Yuniverse
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-base-content/40">Built with</span>

              {/* React */}
              <div className="relative group inline-block">
                <FontAwesomeIcon icon={faReact} className="text-cyan-400 text-[20px]" fixedWidth />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">React</div>
              </div>

              {/* Vite */}
              <div className="relative group inline-block">
                <img src="/vite.svg" className="h-5 w-auto" alt="Vite" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">Vite</div>
              </div>

              {/* Tailwind */}
              <div className="relative group inline-block">
                <svg className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 34">
                  <path fill="#38BDF8" d="M27 0c-7.5 0-12.2 3.7-14 11.1 2.8-3.7 6.1-5.1 10-4.2 2.2.5 3.8 2 5.6 3.8 2.9 2.9 6.3 6.3 13.4 6.3 7.5 0 12.2-3.7 14-11.1-2.8 3.7-6.1 5.1-10 4.2-2.2-.5-3.8-2-5.6-3.8C37.5 3.4 34.1 0 27 0zm-14 16.8c-7.5 0-12.2 3.7-14 11.1 2.8-3.7 6.1-5.1 10-4.2 2.2.5 3.8 2 5.6 3.8 2.9 2.9 6.3 6.3 13.4 6.3 7.5 0 12.2-3.7 14-11.1-2.8 3.7-6.1 5.1-10 4.2-2.2-.5-3.8-2-5.6-3.8-2.9-2.9-6.3-6.3-13.4-6.3z"/>
                </svg>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">Tailwind</div>
              </div>

              {/* DaisyUI */}
              <div className="relative group inline-block">
                <img src="/daisyui-logo.svg" className="h-5 w-auto" alt="DaisyUI" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">DaisyUI</div>
              </div>

            </div>
          </div>
        </div>

      </footer>
      </div>
    </>
  );
}

export default App;
