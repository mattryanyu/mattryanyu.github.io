import Reveal from "../Reveal";

export default function Stats({ resume }) {
  return (
    <div className="bg-base-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {resume.stats.map((stat, i) => (
            <Reveal key={i}>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-base-content/60 tracking-tight text-lg">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-base-content sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
