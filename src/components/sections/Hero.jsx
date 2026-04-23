import Reveal from "../Reveal";
import cover from "../../assets/img/cover.jpg";

export default function Hero() {
  return (
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
  );
}
