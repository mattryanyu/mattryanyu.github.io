import Reveal from "../Reveal";

export default function Stats({ resume }) {
  return (
    <div className="bg-base-300 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {resume.stats.map((stat, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl bg-base-100 p-8 ring-1 ring-base-content/10 flex flex-col items-center gap-y-3 text-center">
                <dd className="text-6xl font-semibold tracking-tight bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </dd>
                <dt className="text-lg text-base-content/60 tracking-tight">
                  {stat.name}
                </dt>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
