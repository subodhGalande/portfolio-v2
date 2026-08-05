import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

const ProjectCard = () => {
  const projects = [
    {
      img: "/kanban.png",
      title: "Full-Stack Web Application",
      desc: "Kanban: Full-Stack Task Management App",
      links: {
        direct: "https://kanban-subodh.vercel.app/",
        github: "https://github.com/subodhGalande/kanban",
      },
      tech: ["TypeScript", "Next.js", "dnd-kit", "Tailwind CSS", "Prisma", "NeonDB", "PostgreSQL"],
    },
    {
      img: "/flavorfind.png",
      title: "Interactive Web Application",
      desc: "FlavorFind: Interactive Recipe Explorer",
      links: {
        direct: "https://flavor-find.vercel.app/",
        github: "https://github.com/subodhGalande/flavorFind",
      },
      tech: ["JavaScript", "React", "Axios", "Tailwind CSS", "RESTful API"],
    },
    {
      img: "/ai.png",
      title: "Landing Page",
      desc: "AI Startup: Cutting-Edge Landing Page for AI-Driven SEO Platform",
      links: {
        direct: "https://aistartup.netlify.app/",
        github: "https://github.com/subodhGalande/AI-Startup-Landing-Page",
      },
      tech: ["JavaScript", "React", "Tailwind CSS", "GSAP"],
    },
    {
      img: "/SBMOverseas.png",
      title: "Landing Page",
      desc: "SBM Overseas: Freelance landing site project",
      links: {
        direct: "https://sbmoverseas.vercel.app/",
        github: "https://github.com/subodhGalande/sbmoverseas",
      },
      tech: ["JavaScript", "React", "Tailwind CSS"],
    },
    {
      img: "/OneDesk.png",
      title: "Fullstack Project",
      desc: "OneDesk: Fast, chat-based student-authority communication",
      links: {
        github: "https://github.com/subodhGalande/OneDesk",
      },
      tech: ["JavaScript", "Bulma CSS", "PHP", "MySQL"],
    },
    {
      img: "/stoxticker.png",
      title: "Cross Platform Mobile App",
      desc: "StoxTicker: Instantly access and analyze market trends.",
      links: {
        github: "https://github.com/subodhGalande/stoxticker",
      },
      tech: ["JavaScript", "React", "Ionic Framework"],
    },
  ];

  return (
    <>
      <div className="mt-11 w-full max-w-7xl flex mx-auto flex-col justify-center gap-10 sm:gap-y-16 sm:flex-row sm:flex flex-wrap sm:mt-14 md:w-full sm:h-full sm:w-3/4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-1/2 text-left w-full gap-y-3 flex flex-col sm:w-[35%] sm:h-auto"
          >
            <a
              href={
                project.links.direct && project.links.direct
                  ? project.links.direct
                  : project.links.github
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.desc} preview`}
              className="block overflow-hidden rounded-xl sm:rounded-3xl"
            >
              <div>
                <img
                  src={project.img}
                  className="rounded-xl hover:scale-[102%] duration-150 w-full sm:rounded-3xl object-cover"
                  alt={`Preview screenshot of ${project.desc}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>

            <span className="font-sans text-xs uppercase tracking-wider text-grey sm:text-sm font-semibold mt-1">
              {project.title}
            </span>
            <h3 className="font-sans leading-7 -mt-1 font-medium text-xl sm:text-2xl text-white">
              {project.desc}
            </h3>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono bg-white/10 rounded-md text-grey border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex mt-2 w-full justify-between items-center">
              <div className="flex gap-4 justify-around">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.desc} on GitHub`}
                    className="p-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  >
                    <PiGithubLogo className="h-5 w-5 sm:w-6 sm:h-6 text-grey hover:scale-95 hover:text-white duration-300" />
                  </a>
                )}
                {project.links.direct && (
                  <a
                    href={project.links.direct}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.desc} live website`}
                    className="p-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  >
                    <FiExternalLink className="h-5 w-5 sm:w-6 sm:h-6 text-grey hover:scale-95 hover:text-white duration-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="h-1/2 w-full brightness-50 gap-y-3 flex flex-col sm:w-[35%] sm:h-auto">
          <img
            className="rounded-xl sm:rounded-3xl"
            alt="RevTrail motor trail preview (Work in progress)"
            src="Motor.webp"
            loading="lazy"
            decoding="async"
          />
          <span className="font-sans text-xs uppercase tracking-wider text-grey sm:text-sm font-semibold mt-1">
            Work In Progress
          </span>
          <h3 className="font-sans leading-7 -mt-1 font-medium text-xl sm:text-2xl text-white">
            RevTrail: Snap, map, and share your rides.
          </h3>
          <div className="flex mt-2 sm:mt-4 justify-between">
            <div className="flex gap-4 justify-around">
              <span
                title="Private / In Development"
                aria-label="Project in progress - code private"
                className="p-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <FaLock className="h-5 w-5 sm:w-6 sm:h-6 text-grey" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
