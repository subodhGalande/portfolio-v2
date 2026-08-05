import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { TbBuildingSkyscraper, TbCheck } from "react-icons/tb";

const experiences = [
  {
    id: "freelance",
    role: "Web Developer & Designer",
    orgName: "Freelance",
    location: "Indore, India",
    duration: "Feb '24 – Present",
    type: "Freelance / Embedded",
    summary:
      "Embedded web developer and UI designer working directly with a long-term client team to deliver high-converting web applications, marketing media, and independent AI products.",
    keyImpacts: [
      { label: "Embedded Team Developer", detail: "Delivered conversion-focused React.js & WordPress landing pages directly with client teams." },
      { label: "Design & Brand Consistency", detail: "Designed campaign-ready digital assets and graphics for marketing and social channels." },
      { label: "Intern Mentorship & Leadership", detail: "Mentored client team interns on modern web standards while owning design & deployment." },
      { label: "AI Product Builder", detail: "Continuously building independent AI apps (like PostPilot AI) to pioneer AI-driven dev workflows." },
    ],
    tech: ["React.js", "WordPress", "JavaScript", "Tailwind CSS", "UI/UX Design", "AI Tooling"],
  },
  {
    id: "capgemini",
    role: "Software Engineer",
    orgName: "Capgemini",
    location: "India",
    duration: "Dec '22 – Jan '24",
    type: "Full-Time Enterprise",
    summary:
      "Engineered and maintained high-availability JavaScript & React applications across enterprise teams, integrating complex REST API pipelines and maintaining strict code quality standards.",
    keyImpacts: [
      { label: "Enterprise Codebases", detail: "Maintained robust JavaScript & React front-end architectures in cross-functional teams." },
      { label: "REST API Integration", detail: "Integrated back-end API endpoints, resolved defects, and improved client-side rendering speed." },
      { label: "Git & Quality Standards", detail: "Enforced Git branching workflows, peer code reviews, and enterprise linting rules." },
    ],
    tech: ["JavaScript", "React", "Git", "REST APIs", "Enterprise Systems"],
  },
  {
    id: "amstech",
    role: "Java Trainee Intern",
    orgName: "Amstech Inc.",
    location: "India",
    duration: "Oct '19",
    type: "Academic Internship",
    summary:
      "Completed intensive Java Academic Development program focused on object-oriented software engineering principles and corporate development standards.",
    keyImpacts: [
      { label: "Core Java & OOP", detail: "Mastered core Java fundamentals and object-oriented class structure." },
      { label: "Software Patterns", detail: "Applied design patterns and corporate ethics in real-world coding scenarios." },
    ],
    tech: ["Java", "OOP", "Software Ethics"],
  },
  {
    id: "neuratech",
    role: "Visual Content Development Intern",
    orgName: "Neuratech Innovations",
    location: "India",
    duration: "May '18 – Aug '18",
    type: "Design Internship",
    summary:
      "Collaborated with product teams to design graphic assets and visual content using Adobe Creative Suite.",
    keyImpacts: [
      { label: "Visual Asset Design", detail: "Created UI graphics using Adobe Illustrator, Photoshop, and After Effects." },
      { label: "Product Content", detail: "Translated product concepts into engaging visual graphics for target audiences." },
    ],
    tech: ["UI Design", "Adobe Illustrator", "Photoshop", "Motion Graphics"],
  },
];

const Timeline = () => {
  const [activeId, setActiveId] = useState("freelance");
  const [mobileExpandedId, setMobileExpandedId] = useState("freelance");

  const toggleMobileAccordion = (id) => {
    setMobileExpandedId((prev) => (prev === id ? null : id));
  };

  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <div className="max-w-5xl mx-auto my-6 px-4">
      {/* Availability Banner */}
      <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 inline-flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            Available for Full-Time Roles
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Open to New Opportunities
          </h3>
          <p className="text-xs sm:text-sm text-grey mt-0.5">
            Looking for Full-Stack or Frontend Software Engineer positions.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/Subodh Galande.pdf"
            download="Subodh Galande - Resume"
            aria-label="Download Subodh Galande's Resume PDF"
            className="px-3.5 py-2 text-xs font-semibold bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
          >
            <FiDownload className="w-3.5 h-3.5" /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/subodh-galande/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subodh Galande's LinkedIn Profile"
            className="px-3.5 py-2 text-xs font-medium text-grey hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors inline-flex items-center gap-1.5"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" /> LinkedIn
          </a>
        </div>
      </div>

      {/* MOBILE ACCORDION (< lg screens) */}
      <div className="lg:hidden flex flex-col gap-3">
        <span className="text-xs font-mono text-grey uppercase tracking-wider px-1 font-semibold mb-1">
          Career Chapters
        </span>
        {experiences.map((exp) => {
          const isOpen = mobileExpandedId === exp.id;
          return (
            <div
              key={exp.id}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header Button */}
              <button
                onClick={() => toggleMobileAccordion(exp.id)}
                className="w-full p-4 flex items-center justify-between text-left border-b border-white/5 bg-white/5"
                aria-expanded={isOpen}
              >
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-grey">
                    @ {exp.orgName} • {exp.duration}
                  </p>
                </div>
                {isOpen ? (
                  <FiChevronUp className="w-5 h-5 text-white shrink-0" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-grey shrink-0" />
                )}
              </button>

              {/* Accordion Expanded Body */}
              {isOpen && (
                <div className="p-4 sm:p-5 flex flex-col gap-4 animate-fadeIn">
                  <p className="text-xs text-grey leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Impact Cards Grid */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.keyImpacts.map((impact, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-3 rounded-xl bg-black/40 border border-white/5"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <TbCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <h5 className="text-xs font-bold text-white">
                            {impact.label}
                          </h5>
                        </div>
                        <p className="text-[11px] text-grey leading-normal pl-5">
                          {impact.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-grey font-semibold block mb-2">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-xs font-mono bg-white/10 rounded text-grey border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP BENTO UI (>= lg screens) */}
      <div className="hidden lg:grid grid-cols-12 gap-6 items-start">
        {/* Left Column: Selectable Company Sidebar */}
        <div className="col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono text-grey uppercase tracking-wider px-2 font-semibold">
            Career Chapters
          </span>
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 relative group ${
                  isActive
                    ? "bg-white/10 border-white/40 text-white shadow-lg"
                    : "bg-white/5 border-white/5 text-grey hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-r-full" />
                )}

                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-bold text-base sm:text-lg">
                    {exp.orgName}
                  </h4>
                  <span className="text-[11px] font-mono text-grey">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-grey/80 truncate">{exp.role}</p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Experience Focus Card */}
        <div className="col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/10 mb-5">
              <div>
                <span className="text-xs font-mono text-grey uppercase font-semibold inline-flex items-center gap-1.5 mb-1">
                  <TbBuildingSkyscraper className="w-4 h-4 text-cyan-400" />
                  {activeExp.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                  {activeExp.role}
                </h3>
                <p className="text-sm font-semibold text-grey mt-0.5">
                  @ {activeExp.orgName} {activeExp.location && `• ${activeExp.location}`}
                </p>
              </div>

              <span className="text-xs font-mono text-grey bg-white/10 px-3 py-1.5 rounded-full border border-white/10 shrink-0">
                {activeExp.duration}
              </span>
            </div>

            <p className="text-sm text-grey leading-relaxed mb-5">
              {activeExp.summary}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {activeExp.keyImpacts.map((impact, iIdx) => (
                <div
                  key={iIdx}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <TbCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h5 className="text-xs font-bold text-white truncate">
                      {impact.label}
                    </h5>
                  </div>
                  <p className="text-[11px] text-grey leading-normal pl-6">
                    {impact.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-auto">
            <span className="text-[11px] font-mono uppercase tracking-wider text-grey font-semibold block mb-2">
              Technologies & Tooling Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeExp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono bg-white/10 rounded-md text-grey border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
