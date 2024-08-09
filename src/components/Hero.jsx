const Hero = () => {
  return (
    <>
      <main className=" h-screen w-full flex justify-center items-center">
        <article className="flex sm:mt-20 gap-4 sm:gap-5 flex-col justify-between text-grey text-center">
          <p className="text-base sm:text-lg">
            Hey,{" "}
            <strong className="font-base sm:text-xl font-sans font-medium text-lg">
              I'm Subodh!
            </strong>{" "}
          </p>

          <h1 className="text-4xl  sm:text-7xl max-w-3xl mx-auto font-bold uppercase font-heading leading-9 tracking-tight sm:tracking-normal ">
            I bring ideas to life with
            <strong className="text-white"> code</strong>.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto pb-5 sm:pb-10 leading-6 ">
            I'm a 24-year-old UI/UX designer with over 5 years of experience in
            creating and maintaining design systems.
          </p>
          <button className="btn-primary sm:text-xl sm:px-7 sm:py-3 w-fit mx-auto  ">
            Download Resume
          </button>
        </article>
      </main>
    </>
  );
};

export default Hero;
