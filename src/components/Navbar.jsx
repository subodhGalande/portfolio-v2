const Navbar = () => {
  const links = ["Work", "Projects", "Connect", "Resume"];

  return (
    <>
      <nav className="relative flex justify-between align-middle items-center bg-white/5 backdrop-blur-sm w-11/12 h-16 max-w-xl sm:max-w-none sm:w-1/2 px-8 py-4 rounded-lg mx-auto my-4 text-white">
        <div className="sm:flex">SG</div>
        <div className="sm:hidden rotate-90"> ||| </div>
        <div className=" gap-10 hidden sm:flex ">
          {" "}
          {links.map((text, index) => {
            return <div key={index}>{text}</div>;
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
