import { useEffect, useRef } from "react";

// Split heading into word spans for smooth WAAPI stagger reveal
const WordReveal = ({ text, className, baseDelay = 0 }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word inline-block"
          style={{ "--i": i + baseDelay }}
        >
          {word}{i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const articleRef = useRef(null);

  useEffect(() => {
    const words = document.querySelectorAll(".hero-word");
    words.forEach((word, i) => {
      word.animate(
        [
          { opacity: 0, filter: "blur(8px)", transform: "translateY(12px)" },
          { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
        ],
        {
          duration: 480,
          delay: 100 + i * 50,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );
    });
  }, []);

  return (
    <main
      id="home"
      className="hero-section h-screen w-full flex justify-center items-center px-4"
    >
      <article
        ref={articleRef}
        className="hero-article flex sm:mt-16 gap-5 sm:gap-6 flex-col justify-center items-center text-center max-w-4xl mx-auto"
      >
        {/* Simple, Minimal Greeting */}
        <p className="hero-word text-base sm:text-lg font-sans text-grey">
          Hey, <span className="text-white font-medium">I'm Subodh Galande</span>
        </p>

        {/* Clean, Minimal Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-semibold text-grey leading-tight tracking-tight sm:tracking-normal">
          <WordReveal text="Full-Stack Engineer Building" baseDelay={1} />{" "}
          <span className="text-white font-semibold">
            <WordReveal text="Products That Work" baseDelay={5} />
          </span>
          .
        </h1>

        {/* Minimal Subtext */}
        <p className="hero-word text-base sm:text-lg max-w-2xl text-grey/80 leading-relaxed font-sans text-pretty">
          Building high-performance React & Next.js applications with clean architecture and crisp user{"\u00a0"}experience.
        </p>

        {/* Clean Resume CTA */}
        <a
          href="/Subodh Galande.pdf"
          download="Subodh Galande - Resume"
          aria-label="Download Subodh Galande's Resume PDF"
          className="btn-primary sm:text-base sm:px-8 sm:py-3.5 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform hover:scale-95"
          style={{
            opacity: 0,
            animation: "heroFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.6s forwards",
          }}
        >
          Get Resume
        </a>
      </article>
    </main>
  );
};

export default Hero;
