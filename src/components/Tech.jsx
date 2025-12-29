import { AiOutlineJavaScript } from "react-icons/ai";
import { DiIonic, DiReact } from "react-icons/di";
import { FaGitAlt, FaLinux } from "react-icons/fa6";
import {
  SiGreensock,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const Techstack = () => {
  const technologies = [
    {
      title: "Javascript",
      logo: <AiOutlineJavaScript className="w-11 h-11 sm:w-12 sm:h-12" />,
    },
    {
      title: "Typescript",
      logo: <SiTypescript className="w-11 h-11 sm:w-12 sm:h-12" />,
    },
    {
      title: "React Js",
      logo: <DiReact className="w-14 h-14 sm:h-16 sm:w-16" />,
    },
    {
      title: "Next Js",
      logo: <SiNextdotjs className="w-14 h-14 sm:h-16 sm:w-16" />,
    },

    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className="w-12 h-12 sm:w-14 sm:h-14" />,
    },
    {
      title: "GSAP",
      logo: <SiGreensock className="w-12 h-12 sm:w-14 sm:h-14" />,
    },
    {
      title: "Prisma",
      logo: <SiPrisma className="w-12 h-12 sm:w-14 sm:h-14" />,
    },
    {
      title: "PostgreSQL",
      logo: <BiLogoPostgresql className="w-12 h-12 sm:w-14 sm:h-14" />,
    },
    {
      title: "Git",
      logo: <FaGitAlt className="w-11 h-11 sm:w-14 sm:h-14" />,
    },
    {
      title: "Linux",
      logo: <FaLinux className="w-11 h-10 sm:w-14 sm:h-12" />,
    },
    {
      title: "Ionic Framework",
      logo: <DiIonic className="w-16 h-16 sm:w-20 sm:h-20" />,
    },
  ];
  return (
    <>
      <div className="flex sm:w-9/12 mx-auto sm:h-screen flex-col justify-center items-center mb-24 text-grey">
        <h1 className="heading">
          Chai and Code: The Secret Ingredients to{" "}
          <strong className="text-white"> My Tech Stack</strong> Superpowers.
        </h1>
        <p className="subheading">
          The Essential Tech Stack That Powers My Development Skills
        </p>

        <div className="flex flex-wrap gap-8 justify-center mt-10 sm:mt-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center"
            >
              <div className="  rounded-full backdrop-blur-xl flex justify-center items-center bg-white/5 h-28 w-28 sm:h-32 sm:w-32">
                {tech.logo}
              </div>
              <p className="text-center sm:text-lg font-heading font-medium text-sm mt-2">
                {" "}
                {tech.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
