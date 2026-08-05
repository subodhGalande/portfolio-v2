import { AiOutlineJavaScript } from "react-icons/ai";
import { DiIonic, DiReact } from "react-icons/di";
import { FaGitAlt, FaLinux } from "react-icons/fa6";
import {
  SiGreensock,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiNodedotjs,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbServerBolt, TbSparkles, TbTerminal2, TbRocket } from "react-icons/tb";

const expertiseDomains = [
  {
    domainNumber: "01",
    domainName: "Frontend & Interactive Engineering",
    subtitle: "User Interface Architecture & Client Performance",
    description: "Specialized in building fast, accessible, and responsive UI with modern React and Next.js.",
    items: [
      {
        title: "React",
        role: "Component Systems & Custom Hooks",
        logo: <DiReact className="w-7 h-7 text-cyan-400" />,
      },
      {
        title: "Next.js",
        role: "SSR, App Router & Performance",
        logo: <SiNextdotjs className="w-6 h-6 text-white" />,
      },
      {
        title: "TypeScript",
        role: "Type-Safe Application Code",
        logo: <SiTypescript className="w-5 h-5 text-blue-400" />,
      },
      {
        title: "JavaScript",
        role: "ES6+ Logic & Async Runtimes",
        logo: <AiOutlineJavaScript className="w-6 h-6 text-yellow-400" />,
      },
      {
        title: "Tailwind CSS",
        role: "Responsive UI & Design Systems",
        logo: <RiTailwindCssFill className="w-6 h-6 text-teal-300" />,
      },
      {
        title: "GSAP",
        role: "Micro-Interactions & UI Motion",
        logo: <SiGreensock className="w-6 h-6 text-green-400" />,
      },
    ],
  },
  {
    domainNumber: "02",
    domainName: "Backend & Database Engineering",
    subtitle: "Runtime Environments, API Systems & Data Persistence",
    description: "Experienced in building server runtimes, relational schemas, ORMs, and RESTful APIs.",
    items: [
      {
        title: "Node.js",
        role: "Server Runtime & API Middleware",
        logo: <SiNodedotjs className="w-6 h-6 text-green-500" />,
      },
      {
        title: "PostgreSQL",
        role: "Relational Data Modeling",
        logo: <BiLogoPostgresql className="w-7 h-7 text-blue-300" />,
      },
      {
        title: "Prisma ORM",
        role: "Type-Safe DB Query Layer",
        logo: <SiPrisma className="w-6 h-6 text-cyan-200" />,
      },
      {
        title: "REST APIs",
        role: "Endpoint Architecture & Integration",
        logo: <TbServerBolt className="w-6 h-6 text-indigo-400" />,
      },
    ],
  },
  {
    domainNumber: "03",
    domainName: "AI-Assisted Engineering & Workflows",
    subtitle: "Leveraging Next-Gen AI Agents & Coding Tools",
    description: "Accelerating feature delivery, code reviews, and system refactoring with autonomous AI tools.",
    items: [
      {
        title: "Google Antigravity",
        role: "Autonomous AI Agentic Coding",
        logo: <SiGoogle className="w-5 h-5 text-amber-400" />,
      },
      {
        title: "Claude",
        role: "Architecture & Code Synthesis",
        logo: <SiAnthropic className="w-5 h-5 text-orange-300" />,
      },
      {
        title: "OpenCode",
        role: "AI Dev Harness & Automation",
        logo: <TbTerminal2 className="w-6 h-6 text-emerald-400" />,
      },
    ],
  },
  {
    domainNumber: "04",
    domainName: "Development Workflow & Infrastructure",
    subtitle: "Source Control, Operating Systems & Mobile UI",
    description: "Daily tools and environments utilized for clean code delivery and cross-platform builds.",
    items: [
      {
        title: "Git",
        role: "Branching & Code Collaboration",
        logo: <FaGitAlt className="w-6 h-6 text-orange-400" />,
      },
      {
        title: "Linux",
        role: "CLI & Dev Environment Setup",
        logo: <FaLinux className="w-6 h-6 text-yellow-200" />,
      },
      {
        title: "Ionic Framework",
        role: "Cross-Platform Mobile UI",
        logo: <DiIonic className="w-7 h-7 text-blue-400" />,
      },
    ],
  },
];

const Techstack = () => {
  return (
    <section className="max-w-6xl mx-auto py-24 px-4 text-grey">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-grey border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5 inline-flex items-center gap-2">
          <TbRocket className="w-4 h-4 text-orange-400" />
          Full-Stack & AI
        </span>
        <h2 className="heading mt-4">
          From{" "}
          <span className="relative inline-block group/coffee cursor-pointer text-white">
            Coffee Cup
            <span className="relative inline-block">
              {/* Rising Coffee Steam Whisks on Hover directly above 's' */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-0.5 pointer-events-none opacity-0 group-hover/coffee:opacity-100 transition-opacity duration-300">
                <span className="w-1 h-3.5 bg-gradient-to-t from-white/70 to-transparent rounded-full blur-[1px] animate-steam-1" />
                <span className="w-1 h-4 bg-gradient-to-t from-white/60 to-transparent rounded-full blur-[1px] animate-steam-2" />
                <span className="w-1 h-3.5 bg-gradient-to-t from-white/50 to-transparent rounded-full blur-[1px] animate-steam-3" />
              </span>
              s
            </span>
          </span>{" "}
          <strong className="text-white">to Autonomous AI Agents</strong>.
        </h2>
        <p className="subheading">
          A breakdown of my favorite web frameworks, databases, and AI coding workflows.
        </p>
      </div>

      {/* Tiered Expertise Container */}
      <div className="relative flex flex-col gap-10">
        {expertiseDomains.map((domain, idx) => (
          <div key={idx} className="relative group">
            {/* Connecting Vertical Pipeline Line */}
            {idx < expertiseDomains.length - 1 && (
              <div className="hidden lg:block absolute left-8 top-full h-10 w-0.5 border-l-2 border-dashed border-white/20 z-0" />
            )}

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 relative z-0">
              {/* Domain Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-white/50 font-bold bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                    DOMAIN {domain.domainNumber}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {domain.domainName}
                    </h3>
                    <p className="text-xs sm:text-sm text-grey mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-grey/80 max-w-xs sm:text-right">
                  {domain.description}
                </p>
              </div>

              {/* Technology Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {domain.items.map((tech, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-black/40 border border-white/5"
                  >
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      {tech.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {tech.title}
                      </h4>
                      <p className="text-xs font-mono text-grey truncate">
                        {tech.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
