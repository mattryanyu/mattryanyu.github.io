import Reveal from "../Reveal";

export default function Stats({ resume }) {
  return (
    <div className="bg-base-300 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <dl className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-base-content/10 text-center">
          {resume.stats.map((stat, i) => (
            <Reveal key={i} className="flex-1">
              <div className="flex flex-col gap-y-3 py-10 lg:py-0 lg:px-12 lg:h-full lg:justify-center">
                <dd className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
                <dt className="text-base text-base-content/60 tracking-tight">{stat.name}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
