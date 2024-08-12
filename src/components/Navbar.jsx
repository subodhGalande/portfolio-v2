import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  const links = [
    { name: "Projects", path: "#projects" },
    { name: "Work", path: "#exp" },
    { name: "Connect", path: "#connect" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`z-10 fixed md:w-3/4 lg:w-1/2 mx-auto top-0 left-0 right-0 bg-white/5 backdrop-blur-xl w-11/12 max-w-6xl px-8 py-4 sm:py-2 rounded-xl my-4 sm:mt-10 text-white`}
      >
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-semibold bg-black px-2 py-1 sm:ml-3 rounded-lg font-heading"
          >
            SG
          </a>
          <div className="hidden md:flex w-2/3 justify-around ">
            {links.map((link, index) => (
              <a
                href={link.path}
                className=" hover:text-white duration-300 text-grey "
                key={index}
              >
                {" "}
                {link.name}{" "}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/subodh-galande/"
              target="_blank"
              className="text-white"
            >
              {" "}
              <FaLinkedinIn className="w-6 h-6" />{" "}
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center justify-center w-8 h-8"
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className=" md:hidden relative w-full  text-grey pt-2 rounded-xl flex justify-between items-center">
            <div className=" flex flex-col gap-y-7 mt-5 mb-5 justify-center px-2 h-11/12">
              {links.map((item, index) => (
                <a href={item.path} key={index} className="text-base ">
                  <button onClick={toggleMenu}> {item.name} </button>
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                className="text-grey flex gap-x-2 items-center"
              >
                {" "}
                <FaLinkedinIn className=" text-white w-5 h-5 -mt-1" /> LinkedIn{" "}
              </a>
            </div>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
