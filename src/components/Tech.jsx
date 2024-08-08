import { AiOutlineJavaScript } from "react-icons/ai";
import { DiIonic, DiReact } from "react-icons/di";
import { FaGitAlt, FaLinux } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";

const Techstack = () => {
  const technologies = [
    {
      title: "Javascript",
      logo: <AiOutlineJavaScript className="w-11 h-11" />,
    },
    {
      title: "React Js",
      logo: <DiReact className="w-14 h-14" />,
    },
    {
      title: "Ionic Framework",
      logo: <DiIonic className="w-16 h-16" />,
    },
    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className="w-12 h-12" />,
    },
    {
      title: "Git",
      logo: <FaGitAlt className="w-11 h-11" />,
    },
    {
      title: "Linux",
      logo: <FaLinux className="w-11 h-10" />,
    },
    {
      title: "Framer Motion",
      logo: <SiFramer className="w-10 h-10" />,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-between mb-24 text-grey">
        <h1 className="text-4xl text-center max-w-lg mx-auto font-bold uppercase font-heading leading-9 tracking-tight">
          I WISH I HAD DOCUMENTED ALL MY PROJECTS LIKE THIS.
        </h1>
        <p className="text-lg leading-7 text-center pt-6">
          Here are few of my projects, feel free to share your feedbacks.
        </p>

        <div className="flex flex-wrap gap-8 justify-center mt-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center"
            >
              <div className=" rounded-full flex justify-center items-center bg-white/5 h-28 w-28">
                {tech.logo}
              </div>
              <p className="text-center font-heading font-medium text-sm mt-2">
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
