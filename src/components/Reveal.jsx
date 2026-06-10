import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.translate = "0 0";
        } else {
          element.style.opacity = "0";
          element.style.translate = "0 1.5rem";
        }
      },
      { threshold: 0.15 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        translate: "0 1.5rem",
        transition: `opacity 1.5s ease ${delay}ms, translate 1.5s ease ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
