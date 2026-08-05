import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack Apps" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "mobile", label: "Mobile" },
];

const projects = [
  {
    id: "postpilot",
    img: "/postpilot.png",
    category: "fullstack",
    title: "Full-Stack Web Application",
    desc: "PostPilot: AI-Powered Social Content & Post Platform",
    links: {
      direct: "https://postpilot-labs.vercel.app/",
      github: "https://github.com/subodhGalande/PostPilot-AI",
    },
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: "kanban",
    img: "/kanban.png",
    category: "fullstack",
    title: "Full-Stack Web Application",
    desc: "Kanban: Full-Stack Task Management App",
    links: {
      direct: "https://kanban-subodh.vercel.app/",
      github: "https://github.com/subodhGalande/kanban",
    },
    tech: ["TypeScript", "Next.js", "dnd-kit", "Tailwind CSS", "Prisma", "NeonDB", "PostgreSQL"],
  },
  {
    id: "flavorfind",
    img: "/flavorfind.png",
    category: "frontend",
    title: "Interactive Web Application",
    desc: "FlavorFind: Interactive Recipe Explorer",
    links: {
      direct: "https://flavor-find.vercel.app/",
      github: "https://github.com/subodhGalande/flavorFind",
    },
    tech: ["JavaScript", "React", "Axios", "Tailwind CSS", "RESTful API"],
  },
  {
    id: "aistartup",
    img: "/ai.png",
    category: "frontend",
    title: "Landing Page",
    desc: "AI Startup: Cutting-Edge Landing Page for AI Platform",
    links: {
      direct: "https://aistartup.netlify.app/",
      github: "https://github.com/subodhGalande/AI-Startup-Landing-Page",
    },
    tech: ["JavaScript", "React", "Tailwind CSS", "GSAP"],
  },
  {
    id: "sbmoverseas",
    img: "/SBMOverseas.png",
    category: "frontend",
    title: "Landing Page",
    desc: "SBM Overseas: Freelance landing site project",
    links: {
      direct: "https://sbmoverseas.vercel.app/",
      github: "https://github.com/subodhGalande/sbmoverseas",
    },
    tech: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "onedesk",
    img: "/OneDesk.png",
    category: "fullstack",
    title: "Fullstack Project",
    desc: "OneDesk: Fast student-authority chat system",
    links: {
      github: "https://github.com/subodhGalande/OneDesk",
    },
    tech: ["JavaScript", "Bulma CSS", "PHP", "MySQL"],
  },
  {
    id: "stoxticker",
    img: "/stoxticker.png",
    category: "mobile",
    title: "Cross Platform Mobile App",
    desc: "StoxTicker: Access & analyze market trends",
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
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-colors ${
              activeTab === cat.id
                ? "bg-white text-black border-white"
                : "bg-white/5 text-grey border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3-Column Glassmorphic Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
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
                aria-label={`Open ${project.desc} preview`}
                className="block overflow-hidden rounded-xl bg-black/40 mb-3"
              >
                <img
                  src={project.img}
                  className="rounded-xl w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                  alt={`Preview screenshot of ${project.desc}`}
                  loading="lazy"
                  decoding="async"
                />
              </a>

              {/* Title & Category Tag */}
              <span className="text-xs font-mono uppercase tracking-wider text-grey font-semibold block mb-0.5">
                {project.title}
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-snug mb-2">
                {project.desc}
              </h3>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-xs font-mono bg-white/10 rounded-md text-grey border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/10 mt-auto">
              {project.links.direct && (
                <a
                  href={project.links.direct}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.desc} live website`}
                  className="px-3 py-1.5 text-xs font-semibold bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.desc} on GitHub`}
                  className="px-3 py-1.5 text-xs font-medium text-grey hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors inline-flex items-center gap-1.5"
                >
                  <PiGithubLogo className="w-3.5 h-3.5" /> View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
