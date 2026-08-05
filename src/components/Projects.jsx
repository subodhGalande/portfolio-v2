import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-40 pt-32 text-grey max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="heading">
          Things I've Built While Supposedly{" "}
          <span className="relative inline-block group/sleep cursor-pointer text-white">
            {/* Floating Animated Zzz on Hover */}
            <span className="absolute -top-2 right-0 flex items-baseline pointer-events-none opacity-0 group-hover/sleep:opacity-100 transition-opacity duration-300 font-mono text-grey font-semibold select-none">
              <span className="text-xs animate-zzz-1">z</span>
              <span className="text-sm animate-zzz-2 -ml-0.5">Z</span>
              <span className="text-base animate-zzz-3 -ml-0.5">Z</span>
            </span>
            Sleeping
          </span>
          .
        </h2>
        <p className="subheading">
          Production apps, AI integrations, and things I built because I couldn't find a better tool.
        </p>
      </div>

      <ProjectCard />
    </section>
  );
};

export default Projects;
