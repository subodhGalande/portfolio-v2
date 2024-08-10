import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto flex flex-col gap-4 sm:gap-5 py-10 px-7 mt-44 rounded-xl w-11/12 h-auto bg-white/5 sm:flex-row xl:w-3/5 sm:px-12">
        <h1 className="text-center font-heading font-bold text-5xl text-grey uppercase sm:text-left lg:text-6xl sm:self-center">
          <strong className="text-white">Thanks</strong> for the visit!
        </h1>

        <div className="flex mt-3 text-center justify-center flex-col gap-4">
          <p className=" text-sm font-medium leading-5 text-grey md:text-left lg:text-base">
            I’m pretty sure that I can help you with something, otherwise you
            wouldn’t be here.
          </p>
          <p className=" text-grey text-sm  font-medium text-center sm:text-left lg:text-base">
            Feel free to reach out!
          </p>
          <span className="flex gap-2 justify-center sm:justify-start lg:gap-4">
            <button className="btn-icon">
              {" "}
              <LuMail className="w-7 h-6" />{" "}
            </button>
            <button className="btn-primary"> Resume </button>
          </span>
        </div>
        <div className="flex mt-3 gap-2 flex-col justify-center text-center">
          <h2 className="text-base font-medium sm:text-left lg:text-lg">
            {" "}
            Stay with me!{" "}
          </h2>
          <p className="text-sm text-grey font-medium sm:text-left lg:text-base">
            Drop a follow, I won’t spam your feed. I promise!
          </p>
          <div className="flex justify-center gap-x-2 lg:gap-x-4 mt-4 sm:justify-start">
            <button className="btn-icon">
              {" "}
              <FaGithub className="w-6 h-6" />
            </button>
            <button className="btn-icon">
              <FaLinkedinIn className="w-6 h-6" />
            </button>
            <button className="btn-icon">
              {" "}
              <SiWellfound className="w-6 h-6" />
            </button>
          </div>
        </div>
      </footer>
      <p className="text-base font-medium text-grey text-center pt-44 pb-5">
        {" "}
        Getting 1% better everyday. All rights reserved{" "}
      </p>
    </>
  );
};

export default Footer;
