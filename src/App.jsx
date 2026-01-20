import "./App.css";
import resume from "./data/resume.json";
import ResumeSection from "./components/ResumeSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import cover from "./assets/img/cover.jpg";
import diving from "./assets/img/diving.png";
import biking from "./assets/img/biking.jpg";

function App() {
  return (
    <>
<div
  className="hero h-[90vh] !min-h-[90vh] bg-fixed bg-center bg-cover"

        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-1 text-5xl font-bold">{resume.name}</h1>
            <p className="mb-1 text-2xl font-bold">{resume.title}</p>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
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
                <p className="text-base/7 font-semibold text-indigo-400">
                  {resume.location}
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  {resume.headline}
                </h1>

                {resume.summaries.map((sections, i) => (
                  <div key={i}>
                    <p className="mt-6 text-xl/8 text-gray-300">{sections}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              alt="biking"
              src={biking}
              className="w-full max-w-full h-auto rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10"
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                  Skills
                </h2>
                <p>
                  {resume.skills.map((skills, i) => (
                    <div key={i}>
                      <p>
                        <strong>{skills.theme}</strong>
                      </p>

                      <ul class="skills">
                        {skills.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {resume.stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ResumeSection title="Experience">
        {resume.experience.map((experience, i) => (
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <hr className="bg-white" />
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
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
                <time className="font-mono italic">{experience.year}</time>
                <div className="text-lg font-black">{experience.role}</div>
                {experience.company}
                <br />
                {experience.location}
                <br />({experience.duration})
              </div>
              <hr className="bg-white" />
            </li>
          </ul>
        ))}
      </ResumeSection>

      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="mx-auto p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              alt="diving"
              src={diving}
              className="w-full max-w-full h-auto rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10"
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                <h2 className="m-16 text-2xl font-bold tracking-tight text-white">
                  Industries
                </h2>
                <ul class="industries">
                  {resume.industries.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
                <h2 className="m-16 text-2xl font-bold tracking-tight text-white">
                  Certifications
                </h2>
                {resume.certifications.map((certifications, i) => (
                  <div class="certifications" key={i}>
                    <div>
                      <FontAwesomeIcon icon={faMedal} size="2x" />
                      <h2 className="text-1xl font-bold tracking-tight">
                        {certifications.name}
                      </h2>

                      <i>{certifications.issuer}</i>
                    </div>
                  </div>
                ))}

                <h2 className="m-16 text-2xl font-bold tracking-tight text-white">
                  Interests
                </h2>
                <ul class="interests">
                  {resume.interests.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10"></div>
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
            Education
          </h2>
          {resume.education.map((education, i) => (
            <div class="education" key={i}>
              <div>
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                <br />
                <br />
                <h2 className="mt-0 text-1xl font-bold tracking-tight text-white">
                  {education.school}
                </h2>
                {education.degree} | {education.major}
                <br />
                <i>{education.to}</i>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer class="w-full px-4 py-6 bg-neutral text-white">
        <div class="max-w-6xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
          <div class="text-center md:text-left">
            <p className="text-base">mattyuniverse</p>
            <p className="text-xs">
              Built on React, Vite, TailwindCSS, DaisyUI
            </p>
            <p>
              <FontAwesomeIcon
                icon={faReact}
                size="2x"
                className="text-cyan-400"
              />
            </p>
          </div>

          <div class="flex gap-4 text-center md:text-right">
            <nav>
              <h6 className="footer-title">Find me on</h6>
              <div className="grid grid-flow-col gap-4">
                <a
                  href="https://www.linkedin.com/in/mattryanyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
