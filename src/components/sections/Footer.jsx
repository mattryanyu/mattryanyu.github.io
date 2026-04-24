import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ resume }) {
  return (
    <footer className="bg-base-200 border-t border-base-content/10 text-left">



      <div className="border-t border-base-content/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-base-content/40">© {new Date().getFullYear()} Matt Yuniverse</p>

          <div className="flex items-center gap-3">
            <span className="text-xs text-base-content/40">Built with</span>

            <div className="relative group inline-block">
              <FontAwesomeIcon icon={faReact} className="text-cyan-400 text-[20px]" fixedWidth />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">React</div>
            </div>

            <div className="relative group inline-block">
              <img src="/vite.svg" className="h-5 w-auto" alt="Vite" />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">Vite</div>
            </div>

            <div className="relative group inline-block">
              <svg className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 34">
                <path fill="#38BDF8" d="M27 0c-7.5 0-12.2 3.7-14 11.1 2.8-3.7 6.1-5.1 10-4.2 2.2.5 3.8 2 5.6 3.8 2.9 2.9 6.3 6.3 13.4 6.3 7.5 0 12.2-3.7 14-11.1-2.8 3.7-6.1 5.1-10 4.2-2.2-.5-3.8-2-5.6-3.8C37.5 3.4 34.1 0 27 0zm-14 16.8c-7.5 0-12.2 3.7-14 11.1 2.8-3.7 6.1-5.1 10-4.2 2.2.5 3.8 2 5.6 3.8 2.9 2.9 6.3 6.3 13.4 6.3 7.5 0 12.2-3.7 14-11.1-2.8 3.7-6.1 5.1-10 4.2-2.2-.5-3.8-2-5.6-3.8-2.9-2.9-6.3-6.3-13.4-6.3z"/>
              </svg>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">Tailwind</div>
            </div>

            <div className="relative group inline-block">
              <img src="/daisyui-logo.svg" className="h-5 w-auto" alt="DaisyUI" />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 opacity-0 group-hover:opacity-70 transition bg-black text-white text-xs px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">DaisyUI</div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
