import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

const ProjectCard = () => {
  const projects = [
    {
      img: "/flavorfind.png",
      title: "Interactive Web Application",
      desc: "FlavorFind: Interactive Recipe Explorer",
      links: {
        direct: "https://flavor-find.vercel.app/",
        github: "https://github.com/subodhGalande/flavorFind",
      },
      tech: "javascript React Axios Tailwind-CSS RESTful-API",
    },
    {
      img: "/ai.png",
      title: "Landing Page",
      desc: "AI Startup: Cutting-Edge Landing Page for AI-Driven SEO Platform",
      links: {
        direct: "https://aistartup.netlify.app/",
        github: "https://github.com/subodhGalande/AI-Startup-Landing-Page",
      },
      tech: "javascript React Tailwind CSS GSAP",
    },
    {
      img: "/SBMOverseas.png",
      title: "Landing Page",
      desc: "SBM Overseas: Freelance landing site project",
      links: {
        direct: "https://sbmoverseas.vercel.app/",
        github: "https://github.com/subodhGalande/sbmoverseas",
      },
      tech: "javascript React Tailwind CSS",
    },
    {
      img: "/OneDesk.png",
      title: "Fullstack Project",
      desc: "OneDesk: Fast, chat-based student-authority communication",
      links: {
        github: "https://github.com/subodhGalande/OneDesk",
      },
      tech: "javascript Bulma CSS PHP MySQL",
    },
    {
      img: "/stoxticker.png",
      title: "Cross Platform Mobile App",
      desc: "StoxTicker: Instantly access and analyze market trends.",
      links: {
        github: "https://github.com/subodhGalande/stoxticker",
      },
      tech: "javascript React Ionic Framework",
    },
  ];

  return (
    <>
      <div className="mt-11 w-full max-w-7xl flex mx-auto flex-col justify-center gap-10 sm:gap-y-16 sm:flex-row sm:flex flex-wrap sm:mt-14 md:w-full sm:h-full sm:w-3/4">
        {projects.map((project, index) => (
          <div key={index} className="h-1/2  text-left block w-full gap-y-4 flex flex-col sm:w-[35%] sm:h-auto">
               <a href={project.links.direct && project.links.direct ? project.links.direct : project.links.github} target="_blank">
                <div>
                 <img
                  src={project.img}
                  className="rounded-xl hover:scale-[102%] duration-150 w-full sm:rounded-3xl"
                  alt="image Project"/>
                  </div>
               </a>
              
              <h2 className="font-sans text-sm text-grey sm:text-lg ">
                {project.title}
              </h2>
              <h1 className="font-sans leading-8 -mt-2 font-normal text-2xl sm:text-3xl">
                {project.desc}
              </h1>
              <h1 className="font-mono text-left text-grey text-[.5rem] sm:text-xs ">
                  {project.tech}
                </h1>
              <div className="flex mt-2  w-full  justify-between">
                <div className="flex gap-4 justify-around">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank">
                      {" "}
                      <PiGithubLogo className=" h-5 w-5 sm:w-6 sm:h-6 text-grey hover:scale-95 hover:text-white duration-500" />{" "}
                    </a>
                  )}
                  {project.links.direct && (
                    <a href={project.links.direct} target="_blank">
                      {" "}
                      <FiExternalLink className=" h-5 w-5 sm:w-6 sm:h-6 text-grey hover:scale-95 hover:text-white duration-500" />{" "}
                    </a>
                  )}
                </div>
              
              </div>
            
          </div>
        ))}
        <div className="h-1/2 w-full brightness-50 gap-y-4 flex flex-col sm:w-[35%] sm:h-auto">
          <img className="rounded-xl sm:rounded-3xl" alt="" src="Motor.webp" />
          <h2 className="font-sans text-sm text-grey sm:text-lg ">
            Work In Progress
          </h2>
          <h1 className="font-sans leading-8 -mt-2 font-normal text-2xl sm:text-3xl">
            RevTrail: Snap, map, and share your rides.
          </h1>
          <div className="flex mt-2 sm:mt-6 justify-between">
            <div className="flex gap-4 justify-around">
              <a target="_blank">
                {" "}
                <FaLock className=" h-5 w-5 sm:w-6 sm:h-6 text-grey" />{" "}
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ProjectCard;
