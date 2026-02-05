const ResumeSection = ({ title, children }) => (


 <section className="resume-section relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-gray-900" >
    <h2 className="mt-6 mb-6 text-2xl font-bold tracking-tight text-white">{title}</h2>
    {children}
  </section>

);

export default ResumeSection;

