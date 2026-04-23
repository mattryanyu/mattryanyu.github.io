import Reveal from "../Reveal";
import ResumeSection from "../ResumeSection";

export default function Experience({ resume }) {
  return (
    <ResumeSection id="experience">
      <Reveal>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-base-content">Experience</h2>
      </Reveal>

      {resume.experience.map((item, i) => (
        <ul key={i} className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-base-200 text-base-content/80 pt-2">
          <li>
            <hr className="bg-base-content/20" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 text-left md:text-end">
              <Reveal>
                <time className="font-mono">{item.year}</time>
                <div className="text-lg font-semibold tracking-tight text-pretty">{item.role}</div>
                <span className="tracking-tight text-pretty">
                  {item.company}
                  <br />
                  {item.location}
                </span>
              </Reveal>
            </div>
            <hr className="bg-base-content/20" />
          </li>
        </ul>
      ))}
    </ResumeSection>
  );
}
