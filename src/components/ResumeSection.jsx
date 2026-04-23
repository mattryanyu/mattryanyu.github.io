const ResumeSection = ({ id, title, children }) => (
  <section id={id} className="resume-section relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-base-200 scroll-mt-14">
    <h2 className="mt-6 mb-6 text-2xl font-bold tracking-tight text-base-content">{title}</h2>
    {children}
  </section>
);

export default ResumeSection;

