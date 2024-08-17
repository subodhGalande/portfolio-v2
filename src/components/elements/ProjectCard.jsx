import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";

const ProjectCard = () => {
  const projects = [
    {
      img: "/SBMOverseas.png",
      title: "NFT landing page",
      desc: "Web3: NFT Landing page design concept",
      links: {
        direct: "https://sbmoverseas.vercel.app/",
        github: "https://github.com/subodhGalande/sbmoverseas",
      },
      tech: "javascript React Tailwind CSS",
    },
    {
      img: "/OneDesk.png",
      title: "NFT landing page",
      desc: "Web3: NFT Landing page design concept",
      links: {
        github: "https://github.com/subodhGalande/OneDesk",
      },
      tech: "javascript Bulma CSS PHP MySQL",
    },
    {
      img: "/stoxticker.png",
      title: "NFT landing page",
      desc: "Web3: NFT Landing page design concept",
      links: {
        github: "https://github.com/subodhGalande/stoxticker",
      },
      tech: "javascript React Ionic Framework",
    },
  ];

  return (
    <>
      <div className="mt-11 w-full max-w-7xl flex mx-auto flex-col justify-center gap-10 sm:gap-y-12 sm:flex-row sm:flex flex-wrap sm:mt-14 md:w-full sm:h-full sm:w-3/4">
        {" "}
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
            <div className="flex justify-between">
              <div className="flex gap-4">
                {project.links.github && (
                  <a href={project.links.github} target="_blank">
                    {" "}
                    <PiGithubLogo className=" h-6 w-6 text-grey" />{" "}
                  </a>
                )}

                {project.links.direct && (
                  <a href={project.links.direct} target="_blank">
                    {" "}
                    <FiExternalLink className=" h-6 w-6 text-grey" />{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
