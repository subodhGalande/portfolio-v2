import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import React from "react";
import { useState } from "react";
const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`z-10 fixed mx-auto top-0 left-0 right-0 bg-white/5 backdrop-blur-lg w-11/12 px-8 py-4 rounded-xl my-4 text-white`}
      >
        {/* Logo */}
        <div className="flex justify-between items-center">
          {" "}
          <div className="text-xl bg-black p-2 rounded-lg font-mono"> SG </div>
          {/* Hamburger Icon */}
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
          <nav className=" sm:hidden relative w-full  text-grey pt-2 rounded-xl flex justify-between items-center">
            <div className=" flex flex-col justify-center px-2 h-11/12">
              {links.map((item, index) => (
                <a href={item.path} key={index} className="text-base pt-4">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
