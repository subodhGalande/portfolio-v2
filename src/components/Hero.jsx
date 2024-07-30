const Hero = () => {
  return (
    <>
      <main className=" h-[150vh] w-full flex justify-center items-center">
        <article className="flex flex-col text-grey text-center">
          <p className="text-base">Hey, I'm Subodh!</p>
          <h1 className="text-4xl mt-4 max-w-lg mx-auto font-bold uppercase font-heading ">
            I bring ideas
          </h1>
          <h1 className="text-4xl leading-[1.2em] max-w-lg mx-auto font-bold uppercase font-heading ">
            to life with
            <span className="text-white"> code</span>.
          </h1>

          <p className="text-base my-4 pb-6">
            I'm a 24-year-old UI/UX designer with over 5 years of experience in
            creating and maintaining design systems.
          </p>

          <button className="btn-primary w-fit mx-auto  ">
            Download Resume
          </button>
        </article>
      </main>
    </>
  );
};

export default Hero;
