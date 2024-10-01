const Animation = () => {
  return (
    <>
      <div className=" w-full fixed z-0 h-screen overflow-hidden blur-3xl ">
        <div className=" absolute w-96 h-96  bg-grey blur-2xl  opacity-15 rounded-full  animate-rotate-move-1  "></div>
        <div className="absolute w-80 h-80  bg-grey blur-2xl  opacity-15 rounded-full animate-rotate-move-2 "></div>
        <div className="absolute w-64 h-64  bg-grey blur-2xl  opacity-15 rounded-full animate-rotate-move-3 "></div>
      </div>
    </>
  );
};

export default Animation;
