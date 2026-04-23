const ResumeSection = ({ id, children }) => (
  <section id={id} className="resume-section relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-base-200 scroll-mt-14">
    {children}
  </section>
);

export default ResumeSection;
