const Footer = () => {
  return (
    <>
      <footer className="mx-auto flex flex-col gap-4 py-10 px-7 mt-10 rounded-xl w-11/12 h-auto bg-white/5">
        <h1 className="text-center mt-5 font-heading font-bold text-5xl text-grey uppercase">
          <strong className="text-white">Thanks</strong> for the visit!
        </h1>

        <div className="flex mt-3 text-center justify-center flex-col gap-4">
          <p className=" text-sm font-medium leading-5 text-grey ">
            I’m pretty sure that I can help you with something, otherwise you
            wouldn’t be here.
          </p>
          <p className=" text-grey text-sm  font-medium text-center ">
            Feel free to reach out!
          </p>
          <span className="flex gap-2 justify-center">
            <button className="btn-icon">mail</button>
            <button className="btn-primary"> Resume </button>
          </span>
        </div>
        <div className="flex mt-3 gap-2 flex-col justify-center text-center">
          <h2 className="text-base font-medium"> Stay with me! </h2>
          <p className="text-sm text-grey font-medium">
            Drop a follow, I won’t spam your feed. I promise!
          </p>
          <div className="flex justify-center gap-x-2 mt-4">
            <button className="btn-icon"> Bu </button>
            <button className="btn-icon"> Bu </button>
            <button className="btn-icon"> Bu </button>
            <button className="btn-icon"> Bu </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
