const Hero = () => {
  return (
    <>
      <main className=" h-hero-height w-full flex justify-center items-center">
        <article className="flex flex-col text-slate-300 text-center">
          <p className="text-lg my-2">Hey, I'm Subodh!</p>
          <h1 className="text-5xl my-4 max-w-lg mx-auto font-bold uppercase font-heading ">
            I bring ideas to life with
            <span className="text-white"> code</span> .
          </h1>
          <p className="text-lg my-4">
            I’m a 24-year-old Frontend developer with over a year of experience.
          </p>
          <button className="btn-primary w-fit mx-auto my-6">
            Download Resume
          </button>
        </article>
      </main>
    </>
  );
};

export default Hero;
