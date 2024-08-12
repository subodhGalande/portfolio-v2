const Animation = () => {
  return (
    <>
      <div className=" w-full fixed z-0 h-screen overflow-hidden blur-3xl ">
        <div className=" absolute w-96 h-96  bg-white blur-3xl opacity-20 rounded-full  animate-random-move-1  mix-blend-soft-light "></div>
        <div className="absolute w-72 h-72  bg-white blur-3xl  opacity-25 rounded-full animate-random-move-2 mix-blend-soft-light "></div>
        <div className="absolute w-64 h-64  bg-white  blur-3xl opacity-30 rounded-full animate-random-move-3  mix-blend-soft-light"></div>
      </div>
    </>
  );
};

export default Animation;
