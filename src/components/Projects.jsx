import { TbRocket } from "react-icons/tb";
import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-40 pt-32 text-grey max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-grey border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5 inline-flex items-center gap-2">
          <TbRocket className="w-4 h-4 text-orange-400" />
          PROOF OF WORK
        </span>
        <h2 className="heading mt-4">
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
          From full-stack web apps and AI tools to side projects built for fun.
        </p>
      </div>

      <ProjectCard />
    </section>
  );
};

export default Projects;
