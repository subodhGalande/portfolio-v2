const Animation = () => {
  return (
    <>
      <div className="w-11/12s h-screen fixed z-10 backdrop-blur-3xl bg-black/5 backdrop-brightness-50"></div>
      <div className="fixed z-10 w-full h-screen overflow-hidden ">
        <div className="absolute w-80 h-80 z-0 bg-white/50 opacity-50  blur-3xl rounded-full  animate-random-move-1  mix-blend-multiply "></div>
        <div className="absolute w-72 h-72 z-0 bg-white/60 opacity-50 blur-3xl rounded-full animate-random-move- mix-blend-multiply "></div>
        <div className="absolute w-64 h-64 z-0 bg-white/60 opacity-50 blur-3xl rounded-full animate-random-move-  mix-blend-multiply"></div>
      </div>
    </>
  );
};

export default Animation;
