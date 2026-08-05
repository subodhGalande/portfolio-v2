import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    { name: "Projects", path: "#projects" },
    { name: "Work", path: "#exp" },
    { name: "Connect", path: "#connect" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (link) => {
    lenis?.scrollTo(link, {
      offset: -150,
    });
  };

  const toggleMenu = (link) => {
    setIsOpen(!isOpen);
    scrollTo(link);
  };

  const lenis = useLenis();

  return (
    <>
      <nav
        className={`z-50 fixed md:w-3/4 lg:w-1/2 mx-auto top-0 left-0 right-0 bg-white/5 backdrop-blur-xl w-11/12 max-w-6xl px-8 py-4 sm:py-2 rounded-xl my-4 sm:mt-10 text-white`}
      >
        <div className="flex justify-between items-center">
          <a
            href="#home"
            aria-label="Subodh Galande Home"
            className="text-xl font-semibold bg-black px-2.5 py-1 sm:ml-3 rounded-lg font-heading hover:opacity-90 transition-opacity"
          >
            SG
          </a>
          <div className="hidden md:flex w-2/3 justify-around items-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.path);
                }}
                className="hover:text-white duration-300 text-grey transition-colors py-2 px-3"
              >
                {link.name}
              </a>
            ))}
            <span className="flex items-center justify-between gap-x-6">
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's LinkedIn Profile"
                className="text-white hover:text-grey transition-colors p-1"
              >
                <FaLinkedinIn className="w-7 h-7" />
              </a>
              <a
                href="https://x.com/sub_0dh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's X (Twitter) Profile"
                className="text-white hover:text-grey transition-colors p-1"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </span>
          </div>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="sm:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-white hover:text-grey transition-colors"
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
          <nav className="md:hidden relative w-full text-grey pt-2 rounded-xl flex justify-between items-center">
            <div className="flex flex-col gap-y-5 mt-4 mb-4 justify-center px-2 w-full">
              {links.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleMenu(item.path)}
                  className="text-base text-left text-grey hover:text-white transition-colors py-2 px-1"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's LinkedIn Profile"
                className="text-grey hover:text-white flex gap-x-2 items-center py-2 px-1 transition-colors"
              >
                <FaLinkedinIn className="text-white w-5 h-5 -mt-1" />
                LinkedIn
              </a>
              <a
                href="https://x.com/sub_0dh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's X (Twitter) Profile"
                className="text-grey hover:text-white flex gap-x-2 items-center py-2 px-1 transition-colors"
              >
                <FaXTwitter className="text-white w-5 h-5 -mt-1" />
                Twitter
              </a>
            </div>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
