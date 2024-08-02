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
          <div className="text-xl font-bold">Logo</div>
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center justify-center w-8 h-8"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
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
