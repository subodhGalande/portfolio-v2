import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

const ProjectCard = () => {
  const projects = [
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
      <div className="mt-11 w-full max-w-7xl flex mx-auto flex-col justify-center gap-10 sm:gap-y-12 sm:flex-row sm:flex flex-wrap sm:mt-14 md:w-full sm:h-full sm:w-3/4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-1/2 w-full gap-y-4 flex flex-col sm:w-[40%] sm:h-auto"
          >
            <img
              src={project.img}
              className="rounded-xl sm:rounded-3xl"
              alt=""
            />
            <h2 className="font-sans text-sm text-grey sm:text-lg ">
              {project.title}
            </h2>
            <h1 className="font-sans leading-8 -mt-2 font-normal text-2xl sm:text-3xl">
              {project.desc}
            </h1>
            <div className="flex mt-2 sm:mt-6 justify-between">
              <div className="flex gap-4 justify-around">
                {project.links.github && (
                  <a href={project.links.github} target="_blank">
                    {" "}
                    <PiGithubLogo className=" h-5 w-5 sm:w-6 sm:h-6 text-grey" />{" "}
                  </a>
                )}

                {project.links.direct && (
                  <a href={project.links.direct} target="_blank">
                    {" "}
                    <FiExternalLink className=" h-5 w-5 sm:w-6 sm:h-6 text-grey" />{" "}
                  </a>
                )}
              </div>
              <h1 className="font-mono text-grey text-[.5rem] sm:text-xs self-center">
                {project.tech}
              </h1>
            </div>
          </div>
        ))}
        <div className="h-1/2 w-full brightness-50 gap-y-4 flex flex-col sm:w-[40%] sm:h-auto">
          <img className="rounded-xl sm:rounded-3xl" alt="" src="Motor.jpg" />
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
