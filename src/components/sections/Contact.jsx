import Reveal from "../Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact({ resume }) {
  return (
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
            href={resume.linkedin}
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
  );
}
