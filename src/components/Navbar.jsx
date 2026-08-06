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
  const lenis = useLenis();

  const scrollTo = (link) => {
    lenis?.scrollTo(link, {
      offset: -120,
    });
  };

  const toggleMenu = (link) => {
    setIsOpen(!isOpen);
    if (link) {
      scrollTo(link);
    }
  };

  return (
    <>
      <nav
        className="z-50 fixed md:w-3/4 lg:w-1/2 mx-auto top-0 left-0 right-0 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/50 w-[calc(100%-2rem)] sm:w-11/12 max-w-6xl px-4 sm:px-6 md:px-8 py-3 sm:py-2.5 rounded-2xl my-3 sm:mt-8 text-white transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          {/* Brand Logo Badge */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            aria-label="Subodh Galande Home"
            className="flex items-center justify-center transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Subodh Galande Logo"
              className="h-8 sm:h-9 w-auto object-contain rounded-xl"
            />
          </a>

          {/* Desktop Links & Socials */}
          <div className="hidden md:flex w-2/3 justify-around items-center">
            <div className="flex items-center gap-1">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.path);
                  }}
                  className="text-xs sm:text-sm font-medium text-grey hover:text-white hover:bg-white/5 py-1.5 px-3.5 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <span className="flex items-center justify-between gap-x-3 border-l border-white/10 pl-6">
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's LinkedIn Profile"
                className="text-grey hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/sub_0dh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's X (Twitter) Profile"
                className="text-grey hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-200"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </span>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => toggleMenu()}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="sm:hidden flex items-center justify-center p-2 rounded-xl text-grey hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <IoMdClose className="h-5 w-5" />
            ) : (
              <HiMenuAlt3 className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden w-full text-grey pt-3 mt-3 border-t border-white/10 rounded-xl flex flex-col gap-2">
            {links.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleMenu(item.path)}
                className="text-sm text-left text-grey hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-2 mt-1 border-t border-white/5 px-3">
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's LinkedIn Profile"
                className="text-grey hover:text-white flex gap-x-2 items-center text-xs py-1 transition-colors"
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://x.com/sub_0dh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's X (Twitter) Profile"
                className="text-grey hover:text-white flex gap-x-2 items-center text-xs py-1 transition-colors"
              >
                <FaXTwitter className="text-white w-4 h-4" />
                Twitter
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
