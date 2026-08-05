import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack Apps" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "mobile", label: "Mobile" },
];

const projects = [
  {
    id: "postpilot",
    name: "PostPilot",
    img: "/postpilot.png",
    category: "fullstack",
    title: "Full-Stack Web Application",
    desc: "AI-Powered Social Content & Post Platform",
    links: {
      direct: "https://postpilot-labs.vercel.app/",
      github: "https://github.com/subodhGalande/PostPilot-AI",
    },
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: "kanban",
    name: "Kanban",
    img: "/kanban.png",
    category: "fullstack",
    title: "Full-Stack Web Application",
    desc: "Full-Stack Task Management App",
    links: {
      direct: "https://kanban-subodh.vercel.app/",
      github: "https://github.com/subodhGalande/kanban",
    },
    tech: ["TypeScript", "Next.js", "dnd-kit", "Tailwind CSS", "Prisma", "NeonDB", "PostgreSQL"],
  },
  {
    id: "flavorfind",
    name: "FlavorFind",
    img: "/flavorfind.png",
    category: "frontend",
    title: "Interactive Web Application",
    desc: "Interactive Recipe Explorer",
    links: {
      direct: "https://flavor-find.vercel.app/",
      github: "https://github.com/subodhGalande/flavorFind",
    },
    tech: ["JavaScript", "React", "Axios", "Tailwind CSS", "RESTful API"],
  },
  {
    id: "aistartup",
    name: "AI Startup",
    img: "/ai.png",
    category: "frontend",
    title: "Landing Page",
    desc: "Cutting-Edge Landing Page for AI Platform",
    links: {
      direct: "https://aistartup.netlify.app/",
      github: "https://github.com/subodhGalande/AI-Startup-Landing-Page",
    },
    tech: ["JavaScript", "React", "Tailwind CSS", "GSAP"],
  },
  {
    id: "sbmoverseas",
    name: "SBM Overseas",
    img: "/SBMOverseas.png",
    category: "frontend",
    title: "Landing Page",
    desc: "Freelance Landing Site Project",
    links: {
      direct: "https://sbmoverseas.vercel.app/",
      github: "https://github.com/subodhGalande/sbmoverseas",
    },
    tech: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "onedesk",
    name: "OneDesk",
    img: "/OneDesk.png",
    category: "fullstack",
    title: "Fullstack Project",
    desc: "Fast Student-Authority Chat System",
    links: {
      github: "https://github.com/subodhGalande/OneDesk",
    },
    tech: ["JavaScript", "Bulma CSS", "PHP", "MySQL"],
  },
  {
    id: "stoxticker",
    name: "StoxTicker",
    img: "/stoxticker.png",
    category: "mobile",
    title: "Cross Platform Mobile App",
    desc: "Access & Analyze Market Trends",
    links: {
      github: "https://github.com/subodhGalande/stoxticker",
    },
    tech: ["JavaScript", "React", "Ionic Framework"],
  },
];

const ProjectCard = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterCategories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-colors ${
                isActive
                  ? "text-black border-white"
                  : "bg-white/5 text-grey border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 3-Column Glassmorphic Projects Grid */}
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-colors duration-300 group"
            >
              <div>
                {/* Image Container */}
                <a
                  href={
                    project.links.direct && project.links.direct
                      ? project.links.direct
                      : project.links.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} preview`}
                  className="block overflow-hidden rounded-xl bg-black/40 mb-4 sm:mb-5"
                >
                  <img
                    src={project.img}
                    className="rounded-xl w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                    alt={`Preview screenshot of ${project.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                {/* Group 1: Category / Project Type Heading */}
                <h3 className="text-xs font-mono uppercase tracking-wider text-grey font-medium block mb-4 sm:mb-5">
                  {project.title}
                </h3>

                {/* Group 2: Project Name & Subheading (Grouped & Pushed Lower) */}
                <div className="mb-6 sm:mb-7 space-y-1.5">
                  <h4 className="font-heading text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                    {project.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-grey/80 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Group 3: Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-7">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono bg-white/10 rounded-md text-grey border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 sm:pt-5 border-t border-white/10 mt-auto">
                {project.links.direct && (
                  <a
                    href={project.links.direct}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} live website`}
                    className="px-3.5 py-2 text-xs font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="px-3.5 py-2 text-xs font-medium text-grey hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors inline-flex items-center gap-1.5"
                  >
                    <PiGithubLogo className="w-3.5 h-3.5" /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectCard;
